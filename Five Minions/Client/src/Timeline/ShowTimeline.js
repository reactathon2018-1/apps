import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import MdGrade from 'react-icons/lib/md/grade'
import MdPermPhoneMsg from 'react-icons/lib/md/perm-phone-msg'
import MdSupervisorAccount from 'react-icons/lib/md/supervisor-account'
import MdRecordVoiceOver from 'react-icons/lib/md/record-voice-over'
import MdPictureAsPdf from 'react-icons/lib/md/picture-as-pdf'
import MdCloudUpload from 'react-icons/lib/md/cloud-upload'
import MdDateRange from 'react-icons/lib/md/date-range'
import './TimeLine.css';

export default class ShowTimeline extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        var stepConfig = {
            'First Round': {
                "icon": <MdPermPhoneMsg />
            },
            'Manager Round': {
                "icon": <MdRecordVoiceOver />
            },
            'HR Discussion': {
                "icon": <MdSupervisorAccount />
            },
            'Offer letter': {
                "icon": <MdPictureAsPdf />
            },
            'Upload Documents': {
                "icon": <MdCloudUpload />
            },
            'Joining Date': {
                "icon": <MdDateRange />
            },



        }
        return (
            <VerticalTimeline>
                {this.props.details.map(detail => {
                    if (detail.roundType === 'Joining Date' || detail.status === "inprogress") {
                        return (

                            <VerticalTimelineElement
                                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                                icon={stepConfig[detail.roundType].icon}>
                                <h3 className="vertical-timeline-element-title">{detail.roundType}</h3>
                                <h4 className="vertical-timeline-element-subtitle">{detail.result}</h4>
                                <p>
                                    {detail.feedback}
                                </p>
                                {detail.roundType === 'Upload Documents' &&

                                    <button type='submit'>Upload Documents</button>
                                }
                            </VerticalTimelineElement>
                        )
                    } else if (detail.status === "completed") {
                        return (<VerticalTimelineElement
                            className="vertical-timeline-element--work completed"
                            style={{ fontsize: '2rem' }}
                            date={detail.date}
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={stepConfig[detail.roundType] ? stepConfig[detail.roundType].icon : <MdGrade />} >

                            <h3 className="vertical-timeline-element-title">{detail.roundType}</h3>
                            <h4 className="vertical-timeline-element-subtitle">{detail.result}</h4>
                            <p>
                                {detail.feedback}
                            </p>
                            {detail.roundType === 'Upload Documents' &&

                                <p><h5>Documents uploaded successfully</h5></p>
                            }



                        </VerticalTimelineElement>
                        )
                    }


                })
                }
            </VerticalTimeline>
        )
    }

}