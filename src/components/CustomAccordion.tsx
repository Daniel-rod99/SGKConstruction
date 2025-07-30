import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

interface AccordionItem {
  title: React.ReactNode;
  content: React.ReactNode;
  buttonLabel?: React.ReactNode;
  buttonHref?: string;
  color?: string;
  showDivider?: boolean;
}

interface CustomAccordionProps {
  items: AccordionItem[];
}

export default function CustomAccordion({ items }: CustomAccordionProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | false>(false);

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <Accordion
            expanded={expandedIndex === index}
            onChange={() =>
              setExpandedIndex(expandedIndex === index ? false : index)
            }
            sx={{ backgroundColor: "transparent", boxShadow: "none" }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon sx={{ color: item.color ?? "white" }} />
              }
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <div style={{ color: item.color ?? "white" }}>{item.title}</div>
            </AccordionSummary>
            <AccordionDetails>
              <div style={{ color: item.color ?? "white" }}>{item.content}</div>
              {item.buttonLabel && item.buttonHref && (
                <Button
                  href={item.buttonHref}
                  sx={{ mt: 2, color: item.color ?? "white" }}
                >
                  {item.buttonLabel}
                </Button>
              )}
            </AccordionDetails>
          </Accordion>
          {item.showDivider !== false && (
            <Divider
              sx={{
                borderColor: item.color
                  ? `${item.color}33`
                  : "rgba(255, 255, 255, 0.2)",
                my: 1,
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
