package io.jmix.frontdemo.screen.event;

import io.jmix.ui.screen.*;
import io.jmix.frontdemo.entity.Event;

@UiController("Event.edit")
@UiDescriptor("event-edit.xml")
@EditedEntityContainer("eventDc")
public class EventEdit extends StandardEditor<Event> {
}
