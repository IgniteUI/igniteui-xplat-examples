# Downstream sync GitHub App runbook

The `Sync downstream pull requests` workflow authenticates as a GitHub App. For each matrix job it
mints a short-lived installation token scoped to exactly one downstream repository, pushes the
generated peer branch, and creates, updates, or closes its pull request. It does not merge pull
requests or push directly to a downstream base branch.

The workflow currently writes to these repositories:

| Installation owner | Repository | Pull-request bases |
| --- | --- | --- |
| `IgniteUI` | `igniteui-angular-examples` | `vnext`, `master` |
| `IgniteUI` | `igniteui-react-examples` | `vnext`, `master` |
| `IgniteUI` | `igniteui-wc-examples` | `vnext`, `master` |
| `IgniteUI` | `igniteui-blazor-examples` | `vnext`, `master` |
| `Infragistics` | `winui-samples` | `main` |
| `Infragistics` | `uno-samples` | `main` |

The authoritative repository and base-branch list is the matrix in
[`sync-downstream-prs.yml`](workflows/sync-downstream-prs.yml). Update this runbook whenever that
matrix changes.

## Required configuration

The upstream `IgniteUI/igniteui-xplat-examples` repository needs:

| Type | Name | Value |
| --- | --- | --- |
| Actions variable | `DOWNSTREAM_SYNC_APP_ID` | The App's numeric App ID |
| Actions secret | `DOWNSTREAM_SYNC_APP_PRIVATE_KEY` | The complete PEM private key, including its header and footer |
| Environment | `downstream-sync` | The environment referenced by the write job |

The App ID is not secret. The private key is the only long-lived credential used by this
workflow. The workflow exchanges it for installation tokens that expire after one hour and are
normally revoked by `actions/create-github-app-token` when each job ends.

Store the private key as an environment secret in `downstream-sync` when possible. This restricts
it to jobs that reference that environment. A repository secret with the same name also works
without changing the workflow, but is available to any workflow that explicitly references it.

## Choose the App owner and visibility

The workflow assumes one GitHub App with one App ID and private key, installed in both
organizations.

- If `IgniteUI` and `Infragistics` are organizations in the same GitHub Enterprise, prefer an
  enterprise-owned App with **Only enterprise organizations** visibility.
- Otherwise, the App must allow installation by **Any account** so both organizations can install
  it. This makes the App registration public, but does not publish it in GitHub Marketplace or let
  it access an organization without an owner-approved installation.
- An organization-owned private App can only be installed in the organization that owns it. Using
  private Apps would therefore require two App registrations, two App IDs, two private keys,
  and another workflow matrix selection. That is not the configuration described here.

See GitHub's documentation on
[App visibility](https://docs.github.com/en/enterprise-cloud@latest/apps/creating-github-apps/registering-a-github-app/making-a-github-app-public-or-private).

## Register the App

An enterprise or organization owner should register the App under a durable team-owned account:

1. Open the owner's **Settings > Developer settings > GitHub Apps > New GitHub App**.
2. Give it a durable name such as `Ignite UI downstream sample sync`.
3. Set the homepage URL to this repository or the team's internal ownership page.
4. Disable webhooks. The App is invoked by GitHub Actions and does not receive events directly.
5. Do not enable user authorization, callback URLs, or setup callbacks.
6. Under **Repository permissions**, grant only:
   - **Contents: Read and write** for Git fetch and peer-branch pushes.
   - **Pull requests: Read and write** for listing, creating, editing, and closing peers.
7. Do not grant repository administration, workflows, organization, account, package, or unrelated
   permissions.
8. Select the visibility determined above and create the App.

GitHub supplies read-only repository metadata automatically. The workflow does not modify files
under `.github/workflows` in downstream repositories, so the App does not need the Workflows
permission. GitHub documents the relevant permission model in
[Choosing permissions for a GitHub App](https://docs.github.com/en/apps/creating-github-apps/registering-a-github-app/choosing-permissions-for-a-github-app).

Record the App owner, App URL, App ID, operational owner, and review date in the team's
credential inventory. Do not put a private key in that inventory unless it is the approved
credential manager.

## Install the App

Install the same App twice. An owner of each organization may need to approve the installation.

For the `IgniteUI` installation, choose **Only select repositories** and select:

- `igniteui-angular-examples`
- `igniteui-react-examples`
- `igniteui-wc-examples`
- `igniteui-blazor-examples`

For the `Infragistics` installation, choose **Only select repositories** and select:

- `winui-samples`
- `uno-samples`

Do not select **All repositories**. Confirm that both installations show Contents and Pull requests
read/write access. Installing the App grants authority directly to the App; no bot user or employee
account needs membership in either organization.

The workflow passes both `owner` and a single `repository_name` to the token action. Even though an
installation covers several repositories, each generated token is further restricted to the one
repository handled by that matrix job.

## Create and store the private key

On the App settings page:

1. Under **Private keys**, select **Generate a private key**.
2. Store the downloaded PEM file in the team's credential manager immediately.
3. Copy the numeric App ID from the App's settings page.

In `IgniteUI/igniteui-xplat-examples`:

1. Open **Settings > Secrets and variables > Actions > Variables**.
2. Create the repository variable `DOWNSTREAM_SYNC_APP_ID` with the numeric App ID.
3. Open **Settings > Environments** and create or select `downstream-sync`.
4. Under **Environment secrets**, create `DOWNSTREAM_SYNC_APP_PRIVATE_KEY` and paste the entire PEM
   file contents.

Required environment reviewers provide a strong write-access gate, but they also require approval
after every upstream PR update. Choose protection rules that match the requirement for peer PRs to
stay automatically synchronized. Deployment branch restrictions must also allow the upstream pull
request branches that trigger this job.

GitHub CLI can configure the values without putting the private key directly in shell history:

```sh
gh variable set DOWNSTREAM_SYNC_APP_ID \
  --repo IgniteUI/igniteui-xplat-examples

gh secret set DOWNSTREAM_SYNC_APP_PRIVATE_KEY \
  --env downstream-sync \
  --repo IgniteUI/igniteui-xplat-examples
```

Both commands prompt for their value. Do not place the private key in a command-line argument,
repository file, issue, pull request, workflow input, or workflow log. GitHub secrets are
write-only: administrators can see the name and update time but cannot retrieve the value.

## How the workflow authenticates

Immediately before downstream synchronization, each matrix job runs the official
`actions/create-github-app-token` action with:

- the shared App ID and private key;
- the target installation owner (`IgniteUI` or `Infragistics`);
- exactly one downstream repository;
- Contents and Pull requests write permissions.

The resulting token is passed to the sync script as `GH_TOKEN`. It is not shared between jobs. The
workflow mints it after building the exporter so the full one-hour lifetime is available to the
sync operation. The overall job timeout is shorter than the token lifetime.

See GitHub's guide to
[using a GitHub App from Actions](https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/making-authenticated-api-requests-with-a-github-app-in-a-github-actions-workflow)
and the official
[`create-github-app-token` action](https://github.com/actions/create-github-app-token).

## Validate the setup

Use a same-repository test pull request that changes an in-scope sample or generator file. Pull
requests from forks intentionally cannot access the private key and skip downstream sync.

For the test run:

1. Confirm all six matrix jobs start. If the environment has required reviewers, approve the
   deployment.
2. Confirm the token-creation step succeeds for both installation owners.
3. Confirm the four web repositories each receive independent `--vnext` and `--master` pull
   requests, and each native repository receives a `--main` pull request.
4. Confirm the pull-request actor is the App bot and every PR targets the expected base branch.
5. Push another commit to the upstream test branch and confirm the same downstream PRs update
   rather than duplicate.
6. Close the upstream test pull request and clean up its test peers according to the team's normal
   pull-request policy.

`workflow_dispatch` is also available, but it is not a read-only check: it creates or updates real
downstream branches and pull requests. Supply a real upstream branch and its merge-base only when
that side effect is intended.

List the configured variable and secret metadata without exposing the private key:

```sh
gh variable list --repo IgniteUI/igniteui-xplat-examples
gh secret list --env downstream-sync --repo IgniteUI/igniteui-xplat-examples
```

## Rotate the private key

Rotate before the team's scheduled deadline and immediately after suspected exposure:

1. Generate a second private key from the same App registration. Keep the existing key active.
2. Replace `DOWNSTREAM_SYNC_APP_PRIVATE_KEY` in the `downstream-sync` environment.
3. Queue a same-repository validation run after the replacement and inspect jobs for both owners.
4. Delete the old private key from the App only after all six jobs mint tokens and sync
   successfully.
5. Delete unmanaged copies of the old PEM and update the credential inventory.

No repository commit is required for a routine key rotation. Runs already past the token-creation
step hold an installation token derived from the previous key; cancel or allow those runs to finish
according to the reason for rotation.

## Routine maintenance

Review the integration at least quarterly:

- confirm the App, both installations, variable, and private-key secret are still needed;
- compare the workflow matrix with each installation's selected repositories;
- confirm the App still has only Contents and Pull requests read/write permissions;
- verify environment rules still provide the intended automatic synchronization behavior;
- review Actions logs and organization audit activity for unexpected App use;
- review changes to the sync workflow and script carefully because they receive App authority;
- rotate private keys on the team's schedule.

When adding a downstream repository, add it to the appropriate App installation and workflow
matrix. When adding another organization, install the App there before adding its matrix rows. A
new App permission requires approval on every existing installation before workflows can use it.

## Incident response

If the private key may have leaked or the App produced unexpected writes:

1. Delete the affected private key from the App immediately. Do not wait for a replacement.
2. Cancel active downstream-sync workflow runs. Suspend or uninstall the App installations if the
   activity is ongoing or the source is unknown.
3. Inspect upstream workflow logs and both organizations' audit activity.
4. Inspect branches, commits, and pull requests created by the App. Close or remove unauthorized
   peers using the organizations' incident process.
5. If a workflow log exposed the key, delete that log as well as revoking the key.
6. Generate a new key, replace the environment secret, validate both installations, and document
   the incident.

## Troubleshooting

| Symptom | Likely cause |
| --- | --- |
| Sync job is skipped | The pull request is from a fork; this is intentional. |
| Job waits before starting | The `downstream-sync` environment requires approval or blocks that upstream branch. |
| Token step reports a key or JWT error | The App ID and private key are from different Apps, the PEM was copied incorrectly, or the key was deleted. |
| Token step cannot find an installation | The App is not installed in `matrix.owner`, or its installation is still awaiting approval. |
| Token step cannot access a repository | That repository was not selected in the owner's App installation or its matrix name is wrong. |
| Clone succeeds but push fails | Contents write is missing or an organization ruleset blocks the App on the peer branch. |
| Push succeeds but PR operations fail | Pull requests write is missing or the installation has not approved a permission change. |
| One organization succeeds and the other fails | The failing organization's installation is missing, suspended, unapproved, or lacks that repository. |
