

export default function Sidebar({ links }) {
  return (
    <div className="sidebar-menu">
      {
        links.map(link => (
          <a href={link.path} key={link.name}>
         
            {link.name}
          </a>
        ))
      }
    </div>
  );
}
