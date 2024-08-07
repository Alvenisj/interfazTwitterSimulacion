import { useState } from "react";

export const TwitterFollowCard = ({
  formatUserName,
  children,
  userName,
  name,
}) => {
  const imageSrc = `https://unavatar.io/${userName}`;
  const [isFollowing, setIsFollowing] = useState(false);

  // TEXT QUE CAMBIA DEPENDIENDO DEL VALOR DE LA PROP TRUE, FALSE, ES DECIR, FOLLOW O UNFOLLOW
  const text = isFollowing ? "Following" : "Follow";

  // ESTILOS DEL BOTÓN DEPENDIENDO DE TRUE O FALSE
  const botonClassName = isFollowing
    ? "tw-followCard-button isFollowing"
    : "tw-followCard-button";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={imageSrc}
          alt="El avatar de maría"
        />
        <div className="tw-followCard-info">
          <strong className="tw-followCard-infoName">{children}</strong>
          <span className="tw-followCard-infoUserName">
            {formatUserName(userName)}
          </span>
        </div>
      </header>

      <aside>
        <button className={botonClassName} onClick={handleClick}>
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCard-unfollow">Unfollow</span>
        </button>
      </aside>
    </article>
  );
};
