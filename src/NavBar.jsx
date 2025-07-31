function Navbar({ title, allLists, setTitle, setSaveIndex, allTasks, setTask, setListName, isClosed,
   setIsClosed }) {
  const handleItemOneClick = () => {
    if (allLists[0]){
      setTitle(allLists[0]);
      setTask(allTasks[0]);
      setListName(allLists[0]);
      setSaveIndex(0);

  } else{
      setSaveIndex(0);
      setTask([]);
      setTitle('');
      setListName('');
  }}
  const handleItemTwoClick = () => {
    if (allLists[1]){
      setTitle(allLists[1]);
      setTask(allTasks[1]);
      setListName(allLists[1]);
      setSaveIndex(1);
      
  } else{
      setSaveIndex(1);
      setTask([]);
      setTitle('');
      setListName('');
      
  }}
  const handleItemThreeClick = () => {
    if (allLists[2]){
      setTitle(allLists[2]);
      setTask(allTasks[2]);
      setListName(allLists[2]);
      setSaveIndex(2);
      
  } else{
      setSaveIndex(2);
      setTask([]);
      setTitle('');
      setListName('');
      
  }}
  const handleItemFourClick = () => {
    if (allLists[3]){
      setTitle(allLists[3])
      setTask(allTasks[3]);
      setSaveIndex(3);
      setListName(allLists[3]);
      
  } else{
      setSaveIndex(3);
      setTask([]);
      setTitle('');
      setListName('');
      
  }}
  const handleItemFiveClick = () => {
    if (allLists[4]){
      setTitle(allLists[4]);
      setTask(allTasks[4]);
      setSaveIndex(4);
      setListName(allLists[4]);
      
  } else{
      setSaveIndex(4);
      setTask([]);
      setTitle('');
      setListName('');
      
  }}

  // const handleToggleClick = () => {
  //   setIsClosed(false); 
  // }

  //  const handleCloseClick = () => {
  //   setIsClosed(true);
  // }

  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid d-flex positon-relative">
          <button className="navbar-toggler position-absolute start-0 marginLeft" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
            <span className="navbar-toggler-icon"></span>
          </button>
          <p className="h1 mx-auto titleHeight">{title}</p>
          
        </div>
      </nav>
      <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">Latest Lists</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div>
            <ul className="list-group">
              <li className="list-group-item border-0 pointer">
                <a onClick={handleItemOneClick} className="link-offset-1" data-bs-dismiss="offcanvas">
                  {allLists[0] ? allLists[0] : "- Empty"}
                </a>
              </li>
              <li className="list-group-item border-0 pointer">
                <a onClick={handleItemTwoClick} className="link-offset-1" data-bs-dismiss="offcanvas">
                  {allLists[1] ? allLists[1] : "- Empty"}
                </a>
              </li>
              <li className="list-group-item border-0 pointer">
                <a onClick={handleItemThreeClick} className="link-offset-1" data-bs-dismiss="offcanvas">
                  {allLists[2] ? allLists[2] : "- Empty"}
                </a>
              </li>
              <li className="list-group-item border-0 pointer">
                <a onClick={handleItemFourClick} className="link-offset-1" data-bs-dismiss="offcanvas">
                  {allLists[3] ? allLists[3] : "- Empty"}
                </a>
              </li>
              <li className="list-group-item border-0 pointer">
                <a onClick={handleItemFiveClick} className="link-offset-1" data-bs-dismiss="offcanvas">
                  {allLists[4] ? allLists[4] : "- Empty"}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;