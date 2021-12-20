package io.jmix.frontdemo.screen.event;

import io.jmix.ui.screen.*;
import io.jmix.frontdemo.entity.Event;

@UiController("Event.browse")
@UiDescriptor("event-browse.xml")
@LookupComponent("eventsTable")
public class EventBrowse extends StandardLookup<Event> {
}
