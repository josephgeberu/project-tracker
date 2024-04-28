const Completed = ({ data }) => {
  return (
    <div class="completedProjects">
      <h3>Completed Projects</h3>
      <ul>
        <li key={data.id}>{data.titel}</li>
      </ul>
    </div>
  );
};
export default Completed;
