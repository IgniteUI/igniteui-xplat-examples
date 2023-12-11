namespace Sample
{

//begin imports
using Infragistics.Controls;
using Infragistics.Controls.Layouts;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
//end imports
	
public class ToolbarActionIconCommandInit
{
	//begin eventHandler
	public void ToolbarActionIconCommandInit()
	{
		SvgIconRegistry.Instance.AddSvgPathString("CustomCollection", "CustomIcon",
		@"
			<svg xmlns=""http://www.w3.org/2000/svg"" stroke=""none"" width=""28"" height=""28"" viewBox=""0 0 28"">
			  <g fill-rule=""evenodd"" stroke-width="".07"">
				<path d=""M0 14v14h28V0H0v14M6.685 1.409c.064.041.05 6.148-.014 6.171a.16.16 0 0 0-.071.055c-.033.055-6.166.055-6.199 0a.163.163 0 0 0-.072-.055C.283 7.563.28 7.397.287 4.489l.007-3.072.07-.02c.098-.028 6.278-.016 6.321.012M24.046 1.4c.223.017.358.04.383.065a.408.408 0 0 0 .179.055.708.708 0 0 1 .247.084.743.743 0 0 0 .212.087c.064.012.105.035.105.06 0 .025.027.041.069.041.082 0 .211.055.211.09 0 .014.044.043.098.066.054.023.098.058.098.079 0 .021.038.046.084.055a.264.264 0 0 1 .133.076.34.34 0 0 0 .112.084c.035.014.063.044.063.067 0 .023.03.05.068.059.039.01.074.044.084.081.009.035.041.071.072.079.031.008.056.035.056.059s.03.052.068.061c.039.01.074.044.084.081.009.035.041.071.072.079.031.008.056.034.056.057s.038.08.084.126c.05.05.084.113.084.156 0 .053.014.072.056.072.038 0 .056.019.056.057 0 .072.076.223.112.223.015 0 .035.051.045.113.011.068.039.124.07.141.036.019.052.059.052.127 0 .054.031.152.068.216a.99.99 0 0 1 .096.324c.016.114.045.218.065.23.03.019.039 1.785.052 9.831l.016 9.809.065.182c.151.42.075.784-.163.784-.044 0-.086.017-.094.038-.009.023-.083.046-.19.058-.097.011-.189.036-.205.056-.035.043-.254.1-.388.1a.198.198 0 0 0-.146.056.199.199 0 0 1-.137.056c-.153.001-.297.034-.297.069 0 .023-.086.04-.269.052-.149.01-.307.037-.354.06-.047.023-.133.043-.191.043s-.113.011-.121.024c-.008.013-.116.033-.24.044-.149.013-.225.031-.225.054 0 .024-.119.044-.399.068-.487.041-.809.08-.964.117a3.31 3.31 0 0 1-.504.029c-.654 0-1.185.032-1.185.071 0 .067-1.217.081-7.308.081-6.077 0-7.308-.013-7.308-.081 0-.038-.413-.071-.896-.071a5.11 5.11 0 0 1-.63-.057c-.31-.048-.974-.11-1.183-.111-.035 0-.063-.017-.063-.038 0-.041-.188-.073-.425-.074-.072 0-.139-.013-.149-.028-.01-.015-.04-.028-.067-.028s-.088-.019-.135-.043a1.34 1.34 0 0 0-.354-.06c-.182-.012-.269-.029-.269-.052 0-.042-.188-.07-.466-.07-.157 0-.206-.009-.206-.039 0-.048-.084-.072-.266-.075-.188-.003-.46-.063-.488-.107-.012-.02-.076-.043-.142-.052-.077-.01-.124-.032-.132-.061-.014-.053-.134-.115-.224-.115-.044 0-.064-.016-.064-.053 0-.029-.025-.059-.056-.067-.073-.019-.075-.132-.003-.151a.104.104 0 0 0 .067-.067c.011-.042.039-.053.139-.053.102 0 .128-.011.14-.056.008-.031.038-.056.068-.056.075 0 .204-.064.204-.101 0-.018.089-.039.217-.049.251-.021.343-.042.343-.077 0-.014-.024-.025-.053-.025-.034 0-.064-.03-.082-.081-.016-.045-.055-.09-.087-.1-.033-.01-.058-.042-.058-.073 0-.03-.019-.054-.043-.054-.023 0-.055-.033-.07-.073-.015-.04-.053-.079-.083-.087-.031-.008-.056-.038-.056-.066 0-.028-.032-.086-.071-.128a.393.393 0 0 1-.086-.139c-.009-.034-.04-.069-.07-.077-.033-.009-.061-.048-.071-.101-.01-.048-.033-.087-.052-.087s-.051-.057-.07-.126c-.02-.072-.052-.126-.074-.126-.044 0-.094-.111-.094-.209 0-.04-.02-.07-.052-.078-.041-.011-.056-.051-.07-.192-.01-.098-.035-.191-.055-.207-.056-.043-.08-.122-.103-.346-.013-.125-.037-.216-.06-.23-.044-.027-.059-11.956-.015-12 .013-.013 1.395-.027 3.072-.031l3.049-.007.018.07c.01.039.029.07.043.07.015 0 .025 1.688.025 4.028 0 2.215.008 4.256.018 4.536l.018.508h14.551V7.595l-.105-.017c-.139-.023-5.841-.023-6.009 0l-.129.018-.008 3.116c-.004 1.714-.018 3.126-.031 3.139-.028.028-5.468.049-5.726.023-.119-.012-.195-.036-.231-.072-.052-.052-.053-.179-.046-6.219l.007-6.166.07-.019c.11-.031 14.747-.028 15.142.003"" fill=""#f5f7f7""/>
				<path d=""M.56 1.47c0 .023-.017.042-.039.042-.037 0-.085 5.706-.05 5.943l.011.077h6.035l.015-.077c.036-.19-.016-5.943-.055-5.943-.021 0-.038-.019-.038-.042 0-.037-.345-.042-2.94-.042S.56 1.433.56 1.47m8.512 0a.042.042 0 0 1-.042.042c-.037 0-.042.697-.042 6.104v6.104l2.849-.007 2.849-.007.007-3.073c.006-2.725.012-3.073.05-3.073.023 0 .056-.03.073-.067.046-.101.051-.101 3.174-.101 3.011 0 3.149.004 3.17.086a.101.101 0 0 0 .066.063c.083.022.084 11.458.002 11.484-.028.009-.066.048-.083.086l-.032.069h-7.289c-6.251 0-7.297-.006-7.344-.04-.053-.039-.054-.123-.062-4.602l-.007-4.563-.105-.017C6.174 9.936.594 9.935.513 9.957l-.06.016-.01 5.688c-.01 5.992-.007 6.34.066 6.423a.604.604 0 0 1 .065.232c.014.125.036.193.07.216.027.019.058.081.069.139a.488.488 0 0 0 .072.172c.029.037.061.11.071.163.01.052.034.095.054.095.02 0 .053.057.073.126.021.071.058.133.085.141.026.008.056.052.066.098.01.046.036.083.058.083.022 0 .04.019.04.043 0 .024.019.05.042.059.023.009.042.031.042.048 0 .018.025.048.056.067.031.019.056.06.056.091s.019.056.041.056c.023 0 .061.03.085.067a.206.206 0 0 0 .099.081.074.074 0 0 1 .055.073c0 .04.018.059.055.059.03 0 .096.036.147.079a.66.66 0 0 0 .141.097c.027.01.049.037.049.06s.035.051.077.061c.042.01.099.042.127.07.027.028.084.06.126.07.042.01.114.047.16.081a.537.537 0 0 0 .194.079c.061.009.12.035.133.056.012.022.08.048.152.059a.78.78 0 0 1 .231.08c.102.061.11.061 2.23.078 2.443.019 21.742.006 21.763-.015.015-.015.01-4.128-.018-14.026-.016-5.741-.021-6.242-.063-6.273-.033-.024-.052-.101-.066-.278a5.275 5.275 0 0 0-.024-.251c-.002-.004-1.44-.013-3.196-.021l-3.192-.015-.009-.063-.009-.063h3.122c2.125 0 3.128-.009 3.14-.029.03-.049-.016-.251-.058-.251-.025 0-.045-.049-.057-.14-.014-.106-.03-.14-.067-.14-.032 0-.061-.04-.086-.119a.395.395 0 0 0-.088-.156.128.128 0 0 1-.05-.091c0-.03-.017-.054-.038-.054-.021 0-.062-.05-.091-.11-.029-.061-.076-.116-.102-.123-.027-.007-.049-.039-.049-.072 0-.033-.018-.059-.041-.059-.023 0-.069-.038-.103-.084-.034-.046-.079-.084-.099-.084-.02 0-.037-.022-.037-.049 0-.028-.037-.065-.084-.086-.046-.02-.084-.053-.084-.072 0-.019-.05-.052-.112-.072-.062-.02-.112-.054-.112-.074 0-.02-.03-.045-.067-.054s-.093-.047-.126-.084a.191.191 0 0 0-.146-.068c-.06 0-.091-.015-.1-.051-.009-.036-.07-.066-.207-.101-.122-.032-.194-.065-.194-.089 0-.026-.035-.039-.109-.039-.159 0-.284-.03-.284-.069 0-.023-.126-.045-.399-.068-.458-.04-.497-.048-.497-.103 0-.035-.97-.04-7.21-.04-6.39 0-7.21.005-7.21.042"" fill=""#04a1dc""/>
				<path d=""m.371 1.42-.063.012v6.095l.088.031c.154.054 6.108.042 6.213-.012l.083-.043V1.435l-.088-.018C6.507 1.398.471 1.4.37 1.419m8.561.008c-.059.038-.079 12.209-.02 12.269a.3.3 0 0 1 .055.086c.026.068 5.711.077 5.804.009.053-.039.055-.112.068-3.129l.014-3.089h6.272v11.452h-7.341c-4.039 0-7.343.01-7.343.022 0 .012.022.029.049.038.027.009.074.027.105.042.034.016 2.871.023 7.257.018l7.201-.007.072-.068.072-.068v-5.706c0-5.613-.001-5.707-.054-5.735-.083-.045-6.252-.04-6.296.005-.026.026-.034.748-.034 3.079v3.045l-.105.03c-.073.021-.96.028-2.919.022l-2.814-.008-.007-6.153-.007-6.153 7.497-.007 7.497-.007-7.49-.007c-4.684-.004-7.506.003-7.532.02m-2.338.092c.025.139.003 5.966-.023 6.006-.018.028-.664.035-3.074.035H.447L.42 7.488C.39 7.41.381 1.601.41 1.491l.017-.063h6.15l.016.091m17.374-.052c0 .04.461.098.497.062.009-.009-.042-.017-.114-.017-.098 0-.131-.011-.131-.042 0-.031-.033-.042-.126-.042-.089 0-.126.011-.126.039m.532.082c0 .027.244.139.278.128.067-.022-.041-.106-.159-.125-.065-.01-.119-.011-.119-.003m.424.152c.072.008.106.027.116.065.008.033.038.054.074.054.074 0 .225.076.225.113 0 .015.025.027.056.027a.18.18 0 0 1 .107.051c.077.077.141.095.126.036-.007-.028-.064-.063-.136-.085-.072-.021-.13-.057-.139-.087-.011-.034-.056-.056-.141-.069-.076-.011-.125-.033-.125-.056 0-.048-.065-.073-.177-.067-.085.005-.084.005.013.016m.808.428c0 .054.037.112.072.112.021 0 .072.032.113.07.042.039.086.07.099.07.013 0 .024.019.024.041 0 .023.038.061.084.085.046.024.084.062.084.085 0 .023.019.041.043.041.023 0 .054.03.068.066.014.036.045.074.07.083.025.009.057.049.071.088.015.039.046.071.07.071.024 0 .043.019.043.042 0 .023.028.07.063.105.073.072.133.178.133.235 0 .021.019.039.042.039.024 0 .042.025.042.061 0 .033.007.054.016.045.036-.036-.023-.213-.074-.226a.074.074 0 0 1-.053-.072c0-.032-.03-.078-.067-.102a.206.206 0 0 1-.081-.099c-.008-.03-.034-.055-.059-.055-.025 0-.045-.023-.045-.052 0-.028-.044-.097-.098-.153a.427.427 0 0 1-.098-.13.029.029 0 0 0-.028-.029c-.036 0-.252-.216-.252-.252 0-.015-.024-.028-.053-.028-.029 0-.092-.037-.14-.081-.048-.045-.087-.071-.087-.058m1.148 1.405c0 .021.023.058.052.082a.455.455 0 0 1 .09.174c.021.071.053.13.07.13.019 0 .039.076.049.186.01.102.035.206.058.231.113.126.111-.07.121 10.515.005 5.663-.001 10.173-.015 10.186-.028.028-18.658.05-21.775.025-2.12-.017-2.128-.017-2.23-.078a.752.752 0 0 0-.231-.08c-.071-.011-.139-.037-.152-.059-.012-.022-.072-.047-.133-.056a.513.513 0 0 1-.194-.079.545.545 0 0 0-.162-.081.286.286 0 0 1-.125-.074c-.026-.03-.071-.055-.101-.055-.029 0-.081-.028-.114-.063-.105-.11-.252-.219-.317-.235-.035-.009-.063-.034-.063-.056s-.037-.062-.082-.088c-.045-.026-.088-.07-.095-.097-.007-.027-.033-.049-.058-.049s-.045-.016-.045-.037c0-.02-.044-.085-.098-.143-.054-.059-.098-.124-.098-.145 0-.021-.019-.039-.043-.039-.025 0-.05-.035-.06-.084-.009-.046-.034-.084-.054-.084-.02 0-.062-.057-.093-.126s-.069-.126-.084-.126c-.016 0-.042-.05-.059-.112-.017-.062-.039-.112-.05-.112-.026 0-.08-.128-.104-.245-.01-.05-.035-.1-.056-.112-.02-.012-.044-.053-.052-.091-.008-.039-.011-.008-.006.067.006.086.025.146.052.161.023.013.051.074.061.136.01.062.042.128.07.148.028.02.065.089.083.154.019.071.048.118.073.118.023 0 .041.023.041.05 0 .028.037.094.083.147a.35.35 0 0 1 .084.147c.001.027.033.062.071.076.042.016.07.049.07.081 0 .031.025.063.058.073.032.01.069.049.083.086.014.037.043.068.065.068.022 0 .046.025.054.056s.047.068.087.083c.04.015.073.047.073.07 0 .024.024.043.053.043.029 0 .059.025.067.056.008.031.048.069.09.084.042.016.082.052.089.081.009.035.049.058.12.07.059.009.113.035.122.057.008.022.063.062.122.09a.5.5 0 0 1 .124.074.355.355 0 0 0 .133.051.41.41 0 0 1 .169.079.363.363 0 0 0 .168.072.367.367 0 0 1 .159.063c.028.028.137.053.314.07.149.015.28.041.291.059.065.106 23.492.096 23.594-.01a.255.255 0 0 1 .082-.059c.045-.014.051-19.932.006-19.96-.014-.009-.04-.167-.057-.351-.037-.395-.068-.533-.125-.555-.026-.01-.042-.053-.042-.111 0-.148-.032-.27-.069-.27-.019 0-.052-.066-.074-.147-.036-.136-.137-.23-.137-.128M.385 9.912l-.077.081v5.736c0 4.417.008 5.744.034 5.77.018.018.049.188.068.376.023.226.048.352.074.371a.198.198 0 0 1 .055.071c.009.023.017-.005.018-.062.001-.066-.013-.112-.041-.128-.084-.047-.092-.568-.109-6.339-.015-5.264-.013-5.791.028-5.831.052-.052 5.736-.069 5.916-.018.079.023.091.02.077-.016a.262.262 0 0 1-.017-.069c0-.015-1.186-.025-2.975-.024l-2.975.001-.077.081m6.04 8.232c0 .47.004.662.008.427.005-.235.005-.619 0-.854s-.008-.043-.008.427"" fill=""#62c0e3""/>
				<path d=""m.364 1.397-.07.02L.287 4.49C.28 7.397.283 7.564.329 7.581a.17.17 0 0 1 .072.055c.033.055 6.166.055 6.199 0a.16.16 0 0 1 .071-.055c.064-.023.078-6.13.014-6.171-.043-.028-6.223-.039-6.321-.012m8.54 0-.07.019-.007 6.166c-.007 6.04-.006 6.167.046 6.219.036.036.112.06.231.072.258.026 5.699.005 5.726-.023.013-.013.027-1.426.031-3.141l.008-3.118.076-.011c.071-.011.07-.011-.008-.009l-.084.003-.014 3.089c-.014 3.017-.015 3.09-.068 3.129-.093.068-5.778.059-5.804-.009a.296.296 0 0 0-.055-.086c-.043-.043-.042-12.217.001-12.259.013-.013 3.377-.03 7.476-.037l7.453-.014-7.434-.004c-4.089-.002-7.466.005-7.504.015m-2.3.02.088.018v6.068l-.083.043c-.105.054-6.059.066-6.213.012l-.088-.031V1.432l.063-.012c.101-.019 6.137-.022 6.234-.002m17.483.002c.092.008.133.024.133.052 0 .027.03.041.093.041.187 0 .424.059.469.117a.119.119 0 0 0 .112.047c.107-.015-.116-.135-.289-.156a.396.396 0 0 1-.176-.055c-.024-.024-.12-.042-.257-.048-.12-.005-.158-.004-.085.002m.98.282c.012.006.021.03.021.051 0 .022.019.04.042.04a.042.042 0 0 0 .042-.042c0-.023-.012-.042-.026-.042a.339.339 0 0 1-.063-.009c-.021-.005-.028-.004-.016.002m.195.111c.042.006.083.035.092.063.01.031.066.066.14.088.075.022.128.056.136.087.007.028.032.05.055.05s.082.038.132.084c.049.046.114.084.143.084.029 0 .053.013.053.028 0 .036.216.252.252.252.015 0 .028.013.028.029s.044.075.098.13c.054.056.098.123.098.149 0 .027.025.055.056.063s.056.033.056.056.032.062.07.087c.039.025.07.072.07.104 0 .034.023.064.055.072.039.01.06.048.073.135.012.082.034.125.068.133.033.009.061.062.084.157.02.084.05.144.072.144.021 0 .043.028.049.063.011.055.013.053.016-.013.002-.048-.015-.086-.049-.104-.032-.017-.059-.073-.07-.141-.01-.062-.03-.113-.045-.113-.036 0-.112-.151-.112-.223 0-.039-.018-.057-.056-.057-.042 0-.056-.019-.056-.072 0-.043-.034-.106-.084-.156-.046-.046-.084-.103-.084-.126 0-.023-.025-.049-.056-.057s-.064-.044-.072-.079a.12.12 0 0 0-.08-.08c-.035-.009-.071-.041-.079-.072-.008-.031-.035-.056-.059-.056s-.052-.03-.061-.068a.12.12 0 0 0-.085-.085c-.037-.009-.068-.036-.068-.059s-.028-.053-.063-.067a.33.33 0 0 1-.112-.084.264.264 0 0 0-.133-.076c-.046-.009-.084-.034-.084-.055 0-.021-.044-.056-.098-.079-.054-.023-.098-.052-.098-.066 0-.036-.131-.091-.204-.086-.049.003-.046.007.014.016m1.899 2.27c0 .056.015.098.041.108.057.022.088.161.125.555.017.184.043.342.057.351.045.028.039 19.946-.006 19.96a.255.255 0 0 0-.082.059c-.102.106-23.529.116-23.594.01-.011-.018-.142-.044-.291-.059-.178-.017-.286-.042-.314-.07a.361.361 0 0 0-.159-.063.37.37 0 0 1-.168-.072.41.41 0 0 0-.169-.079c-.064-.014-.124-.037-.133-.051-.009-.014-.065-.047-.124-.074s-.114-.068-.122-.09c-.008-.022-.063-.048-.122-.057-.072-.011-.111-.034-.12-.07-.007-.029-.048-.065-.089-.081-.042-.016-.082-.054-.09-.084-.008-.031-.038-.056-.067-.056-.029 0-.053-.019-.053-.043 0-.023-.033-.055-.073-.07-.04-.015-.079-.053-.087-.083-.008-.031-.032-.056-.054-.056s-.051-.03-.065-.068a.16.16 0 0 0-.083-.086c-.032-.01-.058-.042-.058-.073 0-.033-.028-.066-.07-.081-.039-.015-.07-.049-.071-.076a.362.362 0 0 0-.084-.147c-.046-.053-.083-.119-.083-.147s-.018-.05-.041-.05c-.024 0-.054-.048-.073-.118a.337.337 0 0 0-.083-.154c-.028-.02-.059-.086-.07-.148-.01-.062-.035-.122-.054-.133a.138.138 0 0 1-.051-.063c-.009-.023-.017.006-.018.066-.002.085.009.111.054.122.036.009.056.038.056.08 0 .098.05.209.094.209.022 0 .054.054.074.126.019.069.051.126.07.126s.043.039.052.087c.011.053.039.092.071.101.03.008.061.042.07.077a.435.435 0 0 0 .086.139c.039.042.071.099.071.128s.025.058.056.066.068.047.083.087c.015.04.047.073.07.073.024 0 .043.024.043.054s.026.062.058.073c.032.01.071.055.087.1.018.051.048.081.082.081.029 0 .053.011.053.025 0 .035-.092.056-.343.077-.129.011-.217.031-.217.049 0 .037-.129.101-.204.101-.029 0-.06.025-.068.056-.012.046-.038.056-.14.056-.1 0-.128.011-.139.053a.104.104 0 0 1-.067.067c-.073.019-.071.132.003.151.031.008.056.038.056.067 0 .036.02.053.064.053.09 0 .21.061.224.115.008.029.055.051.132.061.066.009.13.032.142.052.027.044.299.104.488.107.182.003.266.027.266.075 0 .029.049.039.206.039.278 0 .466.028.466.07 0 .023.087.04.269.052.149.01.307.037.354.06.047.023.108.043.135.043s.058.013.067.028c.01.015.076.028.149.028.238 0 .425.033.425.074 0 .021.028.038.063.038.209.001.873.063 1.183.111.2.031.484.056.63.057.483.001.896.034.896.071 0 .068 1.231.082 7.308.081 6.091 0 7.308-.014 7.308-.081 0-.039.53-.071 1.185-.071.213 0 .439-.013.504-.029.156-.038.477-.077.964-.117.28-.023.399-.044.399-.068 0-.023.076-.041.225-.054.124-.011.231-.031.24-.044.008-.013.063-.024.121-.024s.144-.019.191-.043a1.34 1.34 0 0 1 .354-.06c.183-.012.269-.029.269-.052 0-.035.144-.069.297-.069a.195.195 0 0 0 .137-.056.198.198 0 0 1 .146-.056c.134 0 .352-.056.388-.1.016-.02.109-.045.205-.056.107-.012.181-.035.19-.058.008-.021.05-.038.094-.038.238 0 .314-.364.163-.784l-.065-.182-.015-9.808c-.012-8.019-.021-9.812-.051-9.831-.029-.018-.086-.278-.089-.409a.582.582 0 0 0-.07-.14l-.069-.112-.001.092M21.049 7.58l.063.012v11.42H6.561l-.018-.508c-.01-.28-.018-2.321-.018-4.536 0-2.34-.01-4.028-.025-4.028-.014 0-.033-.032-.043-.07l-.018-.07-3.049.007c-1.677.004-3.059.018-3.072.031-.044.044-.029 11.973.015 12 .023.014.047.105.06.23.023.222.046.302.101.346a.2.2 0 0 1 .049.098c.008.039.011.003.006-.078-.006-.1-.024-.159-.056-.183-.036-.027-.056-.115-.083-.377-.019-.188-.05-.357-.068-.376-.026-.026-.034-1.353-.034-5.77V9.991l.082-.082.082-.082h5.934l.017.063c.009.035.017 2.1.017 4.591v4.528l.091.016c.05.009 3.354.013 7.343.008l7.252-.008V7.574l-.07-.003c-.061-.002-.062-.001-.007.009"" fill=""#a2cbdb""/>
				<path d=""M.41 1.491c-.029.11-.02 5.919.01 5.997l.027.072h3.051c2.41 0 3.056-.007 3.074-.035.026-.04.048-5.867.023-6.006-.019-.097-.155-.141-.155-.049 0 .023.017.042.038.042.038 0 .091 5.753.055 5.943l-.015.077H.482l-.011-.077c-.035-.237.014-5.943.05-5.943.021 0 .039-.019.039-.042 0-.07-.131-.052-.15.021m8.557 6.09.007 6.153 2.814.008c1.959.006 2.846-.001 2.919-.022l.105-.03v-3.045c0-2.331.008-3.053.034-3.079.045-.045 6.213-.049 6.296-.005.053.028.054.122.054 5.735v5.706l-.072.068-.072.068-7.201.007c-4.386.005-7.223-.003-7.257-.018-.101-.047-.154-.058-.154-.031 0 .081.244.084 7.391.084h7.282l.032-.069c.017-.038.055-.077.083-.086.083-.026.081-11.462-.002-11.484a.101.101 0 0 1-.066-.063c-.021-.082-.159-.086-3.17-.086-3.124 0-3.128 0-3.174.101-.017.037-.049.067-.073.067-.038 0-.043.348-.05 3.073l-.007 3.073-2.849.007-2.849.007V7.616c0-5.407.005-6.104.042-6.104a.042.042 0 0 0 .042-.042c0-.023-.025-.042-.056-.042-.056 0-.056.014-.049 6.153m14.525-6.113c0 .055.039.063.497.103.273.024.399.045.399.068 0 .039.125.069.284.069.074 0 .109.012.109.039 0 .024.072.057.194.089.138.036.198.065.207.101.009.036.04.051.1.051.057 0 .107.023.146.068a.297.297 0 0 0 .126.084c.037.009.067.033.067.054 0 .02.05.054.112.074.062.02.112.053.112.072 0 .019.038.052.084.072.047.021.084.059.084.086 0 .027.017.049.037.049.02 0 .065.038.099.084.034.046.081.084.103.084.023 0 .041.026.041.059 0 .032.022.064.049.072.027.007.073.063.102.123.029.061.07.11.091.11.021 0 .038.025.038.054 0 .03.023.071.05.091a.37.37 0 0 1 .088.156c.025.079.055.119.086.119.036 0 .052.034.067.14.012.091.032.14.057.14.042 0 .089.202.058.251-.012.02-1.015.029-3.14.029h-3.122l.009.063.009.063 3.192.015c1.756.008 3.194.017 3.196.021.002.004.013.116.024.251.015.177.033.253.066.278.042.031.048.616.066 7.407l.028 9.851c.004 1.363.007-1.976.006-7.42-.002-10.315 0-10.124-.114-10.251a.597.597 0 0 1-.058-.231c-.01-.11-.03-.186-.049-.186-.018 0-.049-.058-.07-.128a.479.479 0 0 0-.088-.175.326.326 0 0 1-.069-.152c-.011-.062-.036-.105-.059-.105a.039.039 0 0 1-.039-.039c0-.056-.06-.162-.133-.235-.035-.034-.063-.082-.063-.105a.042.042 0 0 0-.043-.042c-.023 0-.055-.032-.07-.071-.015-.039-.047-.078-.071-.088-.025-.009-.056-.047-.07-.083-.014-.036-.044-.066-.068-.066a.042.042 0 0 1-.043-.041c0-.023-.038-.061-.084-.085-.046-.024-.084-.062-.084-.085 0-.023-.011-.041-.024-.041a.308.308 0 0 1-.099-.07c-.042-.039-.094-.07-.116-.07-.022 0-.048-.03-.057-.067-.011-.045-.043-.072-.098-.083a.329.329 0 0 1-.138-.073c-.031-.031-.082-.057-.113-.057s-.056-.012-.056-.027c0-.037-.151-.113-.225-.113-.035 0-.066-.022-.074-.052-.011-.04-.05-.057-.168-.071a.89.89 0 0 1-.273-.084c-.088-.049-.185-.071-.375-.086-.191-.015-.257-.03-.257-.059 0-.03-.053-.039-.238-.039-.188 0-.238.008-.238.04M.435 9.957c-.043.043-.04 9.9.003 9.948.006.006.01-2.226.01-4.96V9.974l.063-.017c.083-.022 5.661-.022 5.796 0l.105.017.007 3.671.007 3.671.007-3.667c.005-2.54-.002-3.675-.022-3.696-.056-.056-5.92-.055-5.976.002M.429 21.546c0 .092.005.127.012.077.006-.05.006-.126 0-.168s-.011-.001-.011.091m.193.996c.027.016.05.05.051.076.001.031.007.035.017.012.017-.042-.039-.119-.085-.117-.017 0-.01.014.017.029m.08.173c-.003.052.042.146.102.211.055.06.041-.007-.018-.081a.42.42 0 0 1-.067-.123c-.012-.046-.015-.047-.017-.007"" fill=""#34bcef""/>
			  </g>
			</svg>
		");

		SvgIconRegistry.Instance.AddSvgPathString("CustomLegendCollection", "CustomLegendIcon",
		@"
			<svg width=""28px"" height=""28px"" stroke=""none"" viewBox=""0 0 3.5 3.5"" xmlns=""http://www.w3.org/2000/svg"" xmlns:xlink=""http://www.w3.org/1999/xlink"" aria-hidden=""true"" role=""img"" class=""iconify iconify--gis"" preserveAspectRatio=""xMidYMid meet""><path d=""M0.436 0.178a0.073 0.073 0 0 0 -0.062 0.036L0.01 0.846a0.073 0.073 0 0 0 0.063 0.109h0.729a0.073 0.073 0 0 0 0.063 -0.109L0.501 0.214a0.073 0.073 0 0 0 -0.064 -0.036zm0.001 0.219 0.238 0.413H0.199zM1.4 0.507v0.245h0.525v-0.245zm0.77 0v0.245h1.33v-0.245zM0.073 1.388A0.073 0.073 0 0 0 0 1.461v0.583a0.073 0.073 0 0 0 0.073 0.073h0.729A0.073 0.073 0 0 0 0.875 2.045V1.461a0.073 0.073 0 0 0 -0.073 -0.073zm0.073 0.146h0.583v0.438H0.146zM1.4 1.674v0.245h0.945v-0.245zm1.19 0v0.245h0.91v-0.245zM0.438 2.447c-0.241 0 -0.438 0.197 -0.438 0.438 0 0.241 0.197 0.438 0.438 0.438s0.438 -0.197 0.438 -0.438c0 -0.241 -0.197 -0.438 -0.438 -0.438zm0 0.146a0.291 0.291 0 0 1 0.292 0.292 0.291 0.291 0 0 1 -0.292 0.292 0.291 0.291 0 0 1 -0.292 -0.292A0.291 0.291 0 0 1 0.438 2.593zM1.4 2.842v0.245h0.525v-0.245zm0.77 0v0.245h1.33v-0.245z"" fill=""#000000"" fill-rule=""evenodd""/></svg>            
		");
	}
    //end eventHandler
}