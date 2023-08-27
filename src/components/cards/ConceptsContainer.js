import ConceptsInfo from "./ConceptsInfo";

function ConceptsContainer({ info }) {
  return (
    <ul id="concepts">
      <ConceptsInfo info={info[0]} />
      <ConceptsInfo info={info[1]} />
      <ConceptsInfo info={info[2]} />
    </ul>
  );
}

export default ConceptsContainer;
