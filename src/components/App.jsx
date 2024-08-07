import "../App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
  {
    userName: "maria",
    name: "María Perez",
    descripcion:
      "Frontend Developer apasionada por crear interfaces de usuario intuitivas y eficientes.",
    isFollowing: false,
  },
  {
    userName: "luida",
    name: "Luisa Rosa",
    descripcion:
      "Diseñadora gráfica con un ojo agudo para los detalles y la estética visual.",
    isFollowing: false,
  },
  {
    userName: "rosa",
    name: "Rosa Sandra",
    descripcion:
      "Gerente de proyectos con más de 5 años de experiencia liderando equipos hacia el éxito.",
    isFollowing: true,
  },
  {
    userName: "luz",
    name: "Luz Julia",
    descripcion:
      "Practicante en desarrollo de software, entusiasta del aprendizaje continuo y la innovación tecnológica.",
    isFollowing: true,
  },
];

export const App = () => {
  const formatUserName = (userName) => `@${userName}`;

  return (
    <section className="app">
      {users.map((user) => {
        const { userName, name, descripcion, isFollowing } = user;
        return (
          <TwitterFollowCard
            key={userName}
            initialFollowing={isFollowing}
            formatUserName={formatUserName}
            userName={userName}
            name={name}
            descripcion={descripcion}
          >
            {name}
          </TwitterFollowCard>
        );
      })}
    </section>
  );
};
