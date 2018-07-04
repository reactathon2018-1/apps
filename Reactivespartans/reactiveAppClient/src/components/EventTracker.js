import React from 'react';
import PropTypes from 'prop-types';

import {Timeline, TimelineEvent} from 'react-event-timeline'


function EventTracker(props) {
  return (
    <div>
      <h2>Recent Updates</h2>
      <Timeline>
                <TimelineEvent title="Siva sent a SMS"
                    createdAt="2018-07-06 10:06 PM"
                    icon={<i/>}
                >
                I received the call leter. Should be Joining soon.
                </TimelineEvent>
                <TimelineEvent
                    title="You recieved an email from HR"
                    createdAt="2018-07-07 09:06 AM"
                    icon={<i />}
                >
                Welcome to Onboarding
                </TimelineEvent>
                <TimelineEvent
                    title="Msg from siva"
                    createdAt="2018-07-07 10:06 AM"
                    icon={<i />}
                >
                Thank You
                </TimelineEvent>
        </Timeline>
    </div>
  );
}

EventTracker.propTypes = {
  classes: PropTypes.object,
};

export default EventTracker;
