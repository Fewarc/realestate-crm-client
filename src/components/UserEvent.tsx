import React from "react";
import { Event } from "../types/EventType";

interface EventInterface {
  event: Event
}

const UserEvent: React.FC<EventInterface> = ({
  event
}) => {
  return (
    <div>
      
    </div>
  );
}

export default UserEvent;