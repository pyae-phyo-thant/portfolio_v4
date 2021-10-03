export const NavItem = ({ value, handlerFilterCategory, active }) => {
  let className = "capitalize cursor-pointer hover:text-green-600";
  if (active === value) className += " text-green-600";

  return (
    <li className={className} onClick={() => handlerFilterCategory(value)}>
      {value}
    </li>
  );
};

const ProjectsNavbar = (props) => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <NavItem value="all" {...props} />
      <NavItem value="react" {...props} />
      <NavItem value="node" {...props} />
      <NavItem value="android" {...props} />
      <NavItem value="website" {...props} />
    </div>
  );
};

export default ProjectsNavbar;
