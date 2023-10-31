//Aquest component permet navegar entre pàgina i fer que el link de navegació sigui com el que et trobes a les webs normalment.
//Link fa que puguis donar-li amb el botó dret i poder obrir-ho en una finestra nova si vols.
export function Link({ target, to, ...props }: { target: string; to: string; [key: string]: any }) {
  const handleClick = () => {};
  return <a onClick={handleClick} href={to} target={target} {...props} style={{ textDecoration: "none" }} />;
}
