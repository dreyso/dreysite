import "./sections.css";
import Abode from "./abode";
import Narrative from "./narrative";
import Details from "./details";
import Records from "./records";
import Endeavors from "./endeavors";
import Yours from "./yours";

export const sections = [
    "Abode",
    "Narrative",
    "Details",
    "Records",
    "Endeavors",
    "Yours"
];

export const sectionIds = [
    "abode",
    "narrative",
    "details",
    "records",
    "endeavors",
    "yours"
];

function Sections() {
    return (
        <>
            <Abode />
            <Narrative />
            <Details />
            <Records />
            <Endeavors />
            <Yours />
        </>
      );
}

export default Sections;

