<script>
  import "@event-calendar/core/index.css";
  import Calendar from "@event-calendar/core";
  import TimeGrid from "@event-calendar/time-grid";
  // import ResourceTimeline from "@event-calendar/resource-timeline";
  import Interaction from "@event-calendar/interaction";
  import ResourceTimeGrid from "@event-calendar/resource-time-grid";

  let plugins = [TimeGrid, Interaction, ResourceTimeGrid];
  let options = {
    view: "timeGridWeek",
    // view: "resourceTimeGridDay",
    // view: "resourceTimelineDay",
    // view: "resourceTimelineWeek",
    // view: "resourceTimelineMonth",
    showAllTimes: true,
    // slotDuration: "01:00:00",
    slotDuration: "00:15:00",
    slotMaxTime: "23:00:00",
    slotMinTime: "04:00:00",
    eventDurationEditable: true,
    eventStartEditable: true,
    allDaySlot: false,
    allowMutlidayResize: true,
    events: [
      {
        id: 1,
        start: new Date("2025-03-18T05:00:00-08:00"),
        end: new Date("2025-03-18T07:00:00-08:00"),
      },
    ],
  };
</script>

<Calendar {plugins} {options} />
