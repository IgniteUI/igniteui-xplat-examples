//begin imports
using Infragistics.Controls.Charts;
using System;
using System.Diagnostics;
using System.Windows.Threading;
using Infragistics;
//end imports

//begin supportingTypes
// The animation is the pie growing from nothing to full size while it turns once, stepped by a
// timer. It lives here rather than in either entry point because both of them drive the same
// animation: the sample starts it once when the view is ready, and the button stops and restarts
// it. Two items each holding their own timer would leave the button unable to stop the one that
// started on load.
//
// The chart is handed in rather than looked up here. Asking for a description resolves, where the
// sample is generated, to the field the component was assigned to -- which only means anything
// inside the component's own instance, so the entry points do the asking and pass the answer on.
public static class PieChartAnimation
{
    // The original 360 updates at 15ms describe a 5.4-second animation.
    private const double DurationMilliseconds = 5400;
    private static XamPieChart chart;
    private static DispatcherTimer timer;
    //begin testing
    private static GlobalAnimationState animationState;
    //end testing

    public static bool Running
    {
        get { return timer != null; }
    }

    public static void Toggle(XamPieChart target)
    {
        if (Running)
        {
            Stop();
        }
        else
        {
            Start(target);
        }
    }

    public static void Start(XamPieChart target)
    {
        Stop();
        chart = target;
        chart.StartAngle = 0;
        chart.RadiusFactor = 0.1;
        var started = Stopwatch.StartNew();
        timer = new DispatcherTimer();
        timer.Interval = TimeSpan.FromMilliseconds(15);
        timer.Tick += (s, e) => Tick(started.Elapsed.TotalMilliseconds);
        //begin testing
        animationState = GlobalAnimationState.Instance;
        animationState.NotifyAnimationStart();
        //end testing
        timer.Start();
    }

    public static void Stop()
    {
        if (timer != null)
        {
            timer.Stop();
            timer = null;
            //begin testing
            animationState.NotifyAnimationEnd();
            animationState = null;
            //end testing
        }
    }

    private static void Tick(double elapsedMilliseconds)
    {
        if (chart == null)
        {
            return;
        }
        // Timer callbacks can arrive less often than requested under rendering load.
        var progress = Math.Min(1.0, elapsedMilliseconds / DurationMilliseconds);
        chart.RadiusFactor = 0.1 + 0.9 * progress;
        chart.StartAngle = 360 * progress;
        if (progress >= 1.0)
        {
            Stop();
        }
    }
}
//end supportingTypes
