
"use client";

import { useState } from "react";

import {
  Search,
  House,
  Users,
  BriefcaseBusiness,
  MessageSquare,
  Bell,
  Grid3X3,
  ChevronDown,
  MoreHorizontal,
  ThumbsUp,
  MessageCircle,
  Plus,
  Send
} from "lucide-react";

const peopleViewed = [
  {
    id: 1,
    name: "Nome e sobrenome",
    description: "Título, cargo e tecnologias. Lorem Ipsum Dolor sit Amet",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100"
  },
  {
    id: 2,
    name: "Nome e sobrenome",
    description: "Título, cargo e tecnologias. Lorem Ipsum Dolor sit Amet",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100"
  },
  {
    id: 3,
    name: "Nome e sobrenome",
    description: "Título, cargo e tecnologias. Lorem Ipsum Dolor sit Amet",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100"
  },
  {
    id: 4,
    name: "Nome e sobrenome",
    description: "Título, cargo e tecnologias. Lorem Ipsum Dolor sit Amet",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&sat=-30"
  },
  {
    id: 5,
    name: "Nome e sobrenome",
    description: "Título, cargo e tecnologias. Lorem Ipsum Dolor sit Amet",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100"
  }
];

const suggestions = [
  {
    id: 6,
    name: "Nome e sobrenome",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100"
  },
  {
    id: 7,
    name: "Nome e sobrenome",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100"
  },
  {
    id: 8,
    name: "Nome e sobrenome",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100"
  },
  {
    id: 9,
    name: "Nome e sobrenome",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100"
  },
  {
    id: 10,
    name: "Nome e sobrenome",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100"
  }
];

const experiences = [
  {
    role: "Fullstack Developer",
    type: "Tempo integral",
    period: "jan de 2022 - o momento · 5 meses",
    location: "Cidade, estado e país"
  },
  {
    role: "Fullstack Developer (JR)",
    type: "Tempo integral",
    period: "jun de 2021 - jan de 2022 · 8 meses",
    location: "Cidade, estado e país"
  },
  {
    role: "Front-end Developer",
    type: "Tempo integral",
    period: "jan de 2021 - jun de 2021 · 6 meses",
    location: "Cidade, estado e país"
  }
];

const publications = [
  {
    id: 1,
    title: "Legenda da primeira publicação...",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=700"
  },
  {
    id: 2,
    title: "Legenda da segunda publicação...",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=700"
  },
  {
    id: 3,
    title: "Legenda da terceira publicação...",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700"
  }
];

const posts = [
  {
    id: 1,
    action: "publicou",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu...",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=200"
  },
  {
    id: 2,
    action: "compartilhou",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu...",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=200"
  }
];

function SocialReactions() {
  return (
    <div className="reactions">
      <span className="reaction blue"></span>
      <span className="reaction green"></span>
      <span className="reaction orange"></span>
      <span className="reaction-number">124</span>
    </div>
  );
}

function PersonItem({ person, type, connected, onConnect, onMessage }) {
  return (
    <div className="person-item">
      <img
        src={person.image}
        alt={person.name}
        className="person-photo"
      />

      <div className="person-details">
        <strong>{person.name}</strong>

        {type === "viewed" && (
          <p>{person.description}</p>
        )}

        <button
          className="person-action"
          onClick={() =>
            type === "viewed"
              ? onMessage(person.name)
              : onConnect(person.id)
          }
        >
          {type === "viewed" ? (
            <>
              <Send size={15} />
              Enviar mensagem
            </>
          ) : connected ? (
            "Conectado"
          ) : (
            <>
              <Plus size={15} />
              Conectar
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default function Home() {
  const [connectedIds, setConnectedIds] = useState([]);
  const [notice, setNotice] = useState("");

  function connectPerson(id) {
    setConnectedIds((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
  }

  function sendMessage(name) {
    setNotice(
      `Mensagem demonstrativa para ${name}.`
    );
  }

  return (
    <main className="linkedin-page">

      {/* NAVEGAÇÃO SUPERIOR */}

      <header className="topbar">
        <div className="topbar-content">

          <a href="#perfil" className="linkedin-logo">
            in
          </a>

          <div className="search-area">
            <Search size={21} />
            <input
              type="text"
              placeholder="Pesquisar"
              aria-label="Pesquisar"
            />
          </div>

          <nav className="navigation">

            <a href="#perfil" className="nav-link">
              <House size={23} fill="currentColor" />
              <span>Início</span>
            </a>

            <a href="#sugestoes" className="nav-link">
              <Users size={25} fill="currentColor" />
              <span>Minha rede</span>
            </a>

            <a href="#experiencias" className="nav-link">
              <BriefcaseBusiness size={24} />
              <span>Vagas</span>
            </a>

            <button
              className="nav-link"
              onClick={() => setNotice("Área de mensagens demonstrativa.")}
            >
              <MessageSquare size={23} fill="currentColor" />
              <span>Mensagens</span>
            </button>

            <button
              className="nav-link"
              onClick={() => setNotice("Você não possui novas notificações.")}
            >
              <Bell size={23} fill="currentColor" />
              <span>Notificações</span>
            </button>

            <a href="#destaques" className="nav-link solutions">
              <Grid3X3 size={23} />
              <span>Soluções</span>
            </a>

          </nav>

          <div className="topbar-divider"></div>

        </div>
      </header>


      {/* AVISOS */}

      {notice && (
        <div className="notice">
          <span>{notice}</span>
          <button onClick={() => setNotice("")}>×</button>
        </div>
      )}


      {/* CONTEÚDO */}

      <div className="page-layout">

        <div className="main-content">

          {/* PERFIL */}

          <section className="profile-card" id="perfil">

            <div className="profile-cover"></div>

            <div className="profile-info">

              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400"
                alt="Foto de perfil"
                className="profile-picture"
              />

              <div className="profile-data">

                <div className="profile-main">

                  <h1>Nome Sobrenome</h1>

                  <strong className="job-title">
                    Desenvolvedora | HTML | CSS | Typescript | Node
                  </strong>

                  <p className="hashtags">
                    Fala sobre #javascript, #frontend, #reactjs,
                    e #backend
                  </p>

                  <p className="location">
                    Cidade, estado e país
                    <span>·</span>
                    <a href="#perfil">Informações de contato</a>
                  </p>

                  <p className="followers">
                    ??? seguidores
                    <span>·</span>
                    ??? conexões
                  </p>

                  <div className="profile-buttons">

                    <button
                      className="message-button"
                      onClick={() => sendMessage("Nome Sobrenome")}
                    >
                      Mensagem
                    </button>

                    <button
                      className="more-button"
                      onClick={() => setNotice("Mais opções do perfil.")}
                    >
                      Mais
                    </button>

                  </div>

                </div>

                <div className="profile-organizations">

                  <div className="organization">
                    <div className="organization-image company-image"></div>
                    <strong>Empresa</strong>
                  </div>

                  <div className="organization">
                    <div className="organization-image school-image"></div>
                    <strong>Instituição de ensino</strong>
                  </div>

                </div>

              </div>

            </div>

          </section>


          {/* DESTAQUES */}

          <section className="content-card highlights" id="destaques">

            <h2>Destaques</h2>

            <div className="featured-grid">

              {publications.map((publication) => (
                <article className="featured-post" key={publication.id}>

                  <div className="featured-description">
                    <span>Publicação</span>
                    <p>{publication.title}</p>
                  </div>

                  <div className="featured-image">
                    <img
                      src={publication.image}
                      alt="Imagem da publicação"
                    />
                  </div>

                  <div className="featured-footer">
                    <SocialReactions />
                    <span>5 comentários</span>
                  </div>

                </article>
              ))}

            </div>

          </section>


          {/* ATIVIDADES */}

          <section className="content-card activities" id="atividades">

            <h2>Atividades</h2>

            <a href="#atividades" className="follower-link">
              ??? seguidores
            </a>

            <div className="activity-list">

              {posts.map((post) => (
                <article className="activity-post" key={post.id}>

                  <p className="activity-owner">
                    Nome Sobrenome {post.action} isso · 1 sem
                  </p>

                  <div className="activity-body">

                    <img
                      src={post.image}
                      alt="Imagem da atividade"
                    />

                    <p>{post.text}</p>

                  </div>

                  <div className="activity-footer">

                    <SocialReactions />

                    <span>5 comentários</span>

                  </div>

                </article>
              ))}

            </div>

          </section>


          {/* EXPERIÊNCIAS */}

          <section
            className="content-card experiences"
            id="experiencias"
          >

            <h2>Experiências</h2>

            <div className="experience-company">

              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=150"
                alt="Logo da empresa"
              />

              <div>
                <strong>Empresa</strong>
                <p>1 a 7 m</p>
              </div>

            </div>

            <div className="timeline">

              {experiences.map((experience, index) => (
                <div className="timeline-item" key={experience.role}>

                  <div className="timeline-marker">
                    <span></span>
                  </div>

                  <div className="timeline-content">

                    <strong>{experience.role}</strong>

                    <p className="experience-type">
                      {experience.type}
                    </p>

                    <p className="experience-period">
                      {experience.period}
                    </p>

                    <p className="experience-location">
                      {experience.location}
                    </p>

                  </div>

                </div>
              ))}

            </div>

          </section>


          {/* FORMAÇÃO ACADÊMICA */}

          <section className="content-card education" id="formacao">

            <h2>Formação acadêmica</h2>

            <div className="education-item">

              <img
                src="https://images.unsplash.com/photo-1562774053-701939374585?w=150"
                alt="Instituição de ensino"
              />

              <div>
                <strong>Instituição de ensino</strong>
                <p>Nome do curso</p>
                <span>2015 a 2019</span>
              </div>

            </div>

          </section>


          {/* IDIOMAS */}

          <section className="content-card languages" id="idiomas">

            <h2>Idiomas</h2>

            <div className="language-item">
              <strong>Português</strong>
              <span>Fluente ou nativo</span>
            </div>

            <div className="language-divider"></div>

            <div className="language-item">
              <strong>Inglês</strong>
              <span>Nível profissional</span>
            </div>

          </section>

        </div>


        {/* COLUNA LATERAL */}

        <aside className="sidebar">

          {/* AS PESSOAS TAMBÉM VIRAM */}

          <section className="sidebar-card">

            <h2>As pessoas também viram</h2>

            <div className="people-list">

              {peopleViewed.map((person) => (
                <PersonItem
                  key={person.id}
                  person={person}
                  type="viewed"
                  onMessage={sendMessage}
                  onConnect={connectPerson}
                />
              ))}

            </div>

          </section>


          {/* PESSOAS QUE TALVEZ VOCÊ CONHEÇA */}

          <section className="sidebar-card" id="sugestoes">

            <h2>Pessoas que talvez você conheça</h2>

            <div className="people-list">

              {suggestions.map((person) => (
                <PersonItem
                  key={person.id}
                  person={person}
                  type="suggestion"
                  connected={connectedIds.includes(person.id)}
                  onConnect={connectPerson}
                  onMessage={sendMessage}
                />
              ))}

            </div>

          </section>

        </aside>

      </div>

    </main>
  );
}
