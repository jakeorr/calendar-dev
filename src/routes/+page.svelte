<script>
  import "@event-calendar/core/index.css";
  import Calendar from "@event-calendar/core";
  import TimeGrid from "@event-calendar/time-grid";
  import ResourceTimeline from "@event-calendar/resource-timeline";

  let plugins = [TimeGrid, ResourceTimeline];
  let options = {
    view: "timeGridWeek",
    // view: "resourceTimelineDay",
    // view: "resourceTimelineWeek",
    // view: "resourceTimelineMonth",
    showAllTimes: true,
    // slotDuration: "01:00:00",
    slotDuration: "00:15:00",
    slotMaxTime: "22:00:00",
    slotMinTime: "04:00:00",
    events: [
      // your list of events
    ],
  };
</script>

<Calendar {plugins} {options} />
