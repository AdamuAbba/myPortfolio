import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setTimeline } from "../Redux/timeLineSlice";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";
import { colors } from "../configs/colors";
import sanityClient from "../client";
import { motion } from "framer-motion";

export default function TimeLine() {
  const dispatch = useDispatch();
  const finalData = useSelector((state) => state.timeline.data);
  useEffect(() => {
    const fetchData = async () => {
      const myData = await sanityClient
        .fetch(
          `*[_type == "timeline"]{time,cardTitle,cardSubTitle,cardDetailedText,cardImageUrl}`
        )
        .then((res) => res);
      dispatch(setTimeline(myData));
    };
    fetchData();
  }, [dispatch]);

  return (
    <Container
      fluid
      className="annie-font"
      style={{ width: "100%", height: "400px" }}
    >
      <Timeline lineColor={colors.shyDark}>
        {finalData &&
          finalData.map((item, i) => (
            <TimelineItem
              key={i}
              dateInnerStyle={{ fontSize: 30 }}
              dateText={item.time}
              style={{ color: "#e86971" }}
            >
              <div className="timeline-card">
                <motion.div>
                  <img
                    src={item.cardImageUrl}
                    alt={item.cardTitle}
                    className="img-fluid"
                  />
                </motion.div>

                <h1
                  className="styled-header timeline-text"
                  style={{ color: colors.shyPink }}
                >
                  {item.cardTitle}
                </h1>

                <h3>{item.cardSubTitle}</h3>

                <p className="h4">{item.cardDetailedText}</p>
              </div>
            </TimelineItem>
          ))}
      </Timeline>
    </Container>
  );
}
