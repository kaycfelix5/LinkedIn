
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
  Plus,
  Send,
  Check
} from "lucide-react";

// Pessoas que visualizaram o perfil
const peopleViewed = [
  {
    id: 1,
    name: "Mariana Costa",
    description: "Designer UX/UI · Tecnologia e inovação",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=120"
  },
  {
    id: 2,
    name: "Gabriel Martins",
    description: "Desenvolvedor Web · React e JavaScript",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120"
  },
  {
    id: 3,
    name: "Ana Clara",
    description: "Product Designer · Experiência do usuário",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120"
  },
  {
    id: 4,
    name: "Lucas Oliveira",
    description: "Desenvolvedor Fullstack · Node.js",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120"
  },
  {
    id: 5,
    name: "Beatriz Santos",
    description: "Estudante de tecnologia · Front-end",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=120"
  }
];

// Pessoas recomendadas
const suggestions = [
  {
    id: 6,
    name: "Pedro Henrique",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120",
    description: "Desenvolvedor de software"
  },
  {
    id: 7,
    name: "Camila Ferreira",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=120",
    description: "Designer e criadora digital"
  },
  {
    id: 8,
    name: "Ana Clara",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120",
    description: "Estudante de tecnologia"
  },
  {
    id: 9,
    name: "Lucas Oliveira",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120",
    description: "Desenvolvedor Fullstack"
  },
  {
    id: 10,
    name: "Rafael Souza",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120",
    description: "Analista de sistemas"
  }
];

// Experiências profissionais
const experiences = [
  {
    id: 1,
    role: "Fullstack Developer",
    type: "Tempo integral",
    period: "jan de 2022 - o momento · 5 meses",
    location: "Cidade, estado e país"
  },
  {
    id: 2,
    role: "Fullstack Developer (JR)",
    type: "Tempo integral",
    period: "jun de 2021 - jan de 2022 · 8 meses",
    location: "Cidade, estado e país"
  },
  {
    id: 3,
    role: "Front-end Developer",
    type: "Tempo integral",
    period: "jan de 2021 - jun de 2021 · 6 meses",
    location: "Cidade, estado e país"
  }
];

// Publicações em destaque
const publications = [
  {
    id: 1,
    title: "Legenda da primeira publicação...",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=700"
  },
  {
    id: 2,
    title: "Legenda da segunda publicação...",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=700"
  },
  {
    id: 3,
    title: "Legenda da terceira publicação...",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700"
  }
];

// Publicações das atividades
const posts = [
  {
    id: 1,
    action: "publicou isso",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=200"
  },
  {
    id: 2,
    action: "compartilhou isso",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=200"
  }
];

// Componente das reações
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

// Componente de cada pessoa na lateral
function PersonItem({
  person,
  type,
  connected,
  onConnect,
  onMessage
}) {
  return (
    <div className="person-item">

      <img
        src={person.image}
        alt={`Foto de ${person.name}`}
        className="person-photo"
      />

      <div className="person-details">

        <strong>{person.name}</strong>

        <p>
          {person.description}
        </p>

        <button
          type="button"
          className="person-action"
          onClick={() => {
            if (type === "viewed") {
              onMessage(person.name);
            } else {
              onConnect(person.id);
            }
          }}
        >

          {type === "viewed" ? (
            <>
              <Send size={14} />
              Enviar mensagem
            </>
          ) : connected ? (
            <>
              <Check size={14} />
              Conectado
            </>
          ) : (
            <>
              <Plus size={14} />
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

  // Conectar e desconectar pessoas
  function connectPerson(id) {
    setConnectedIds((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
  }

  // Exibir aviso de mensagem
  function sendMessage(name) {
    setNotice(`Mensagem demonstrativa para ${name}.`);
  }

  return (
    <main className="linkedin-page">

      {/* BARRA DE NAVEGAÇÃO */}

      <header className="topbar">

        <div className="topbar-content">

          <a href="#perfil" className="brand-logo">
            <span className="brand-symbol">N</span>
            <span className="brand-name">nexo</span>
          </a>

          <div className="search-area">
            <Search size={19} />

            <input
              type="search"
              placeholder="Pesquisar na NEXO"
              aria-label="Pesquisar na NEXO"
            />
          </div>

          <nav className="navigation">

            <a href="#perfil" className="nav-link">
              <House size={22} />
              <span>Início</span>
            </a>

            <a href="#sugestoes" className="nav-link">
              <Users size={23} />
              <span>Minha rede</span>
            </a>

            <a href="#experiencias" className="nav-link">
              <BriefcaseBusiness size={22} />
              <span>Carreiras</span>
            </a>

            <button
              type="button"
              className="nav-link"
              onClick={() => sendMessage("sua caixa de entrada")}
            >
              <MessageSquare size={22} />
              <span>Mensagens</span>
            </button>

            <button
              type="button"
              className="nav-link"
              onClick={() => setNotice("Você não possui novas notificações.")}
            >
              <Bell size={22} />
              <span>Notificações</span>
            </button>

            <a href="#destaques" className="nav-link solutions">
              <Grid3X3 size={22} />
              <span>Explorar</span>
            </a>

          </nav>

        </div>

      </header>


      {/* AVISOS DE INTERAÇÃO */}

      {notice && (
        <div className="notice">

          <span>{notice}</span>

          <button
            type="button"
            onClick={() => setNotice("")}
            aria-label="Fechar aviso"
          >
            ×
          </button>

        </div>
      )}


      {/* ÁREA PRINCIPAL */}

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
                    Fala sobre #javascript, #frontend, #reactjs
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
                      type="button"
                      className="message-button"
                      onClick={() => sendMessage("Nome Sobrenome")}
                    >
                      Mensagem
                    </button>

                    <button
                      type="button"
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

          <section
            className="content-card highlights"
            id="destaques"
          >

            <div className="section-title">
              <div>
                <span className="section-label">PORTFÓLIO</span>
                <h2>Destaques</h2>
              </div>

              <span className="section-number">01</span>
            </div>

            <div className="featured-grid">

              {publications.map((publication) => (
                <article
                  className="featured-post"
                  key={publication.id}
                >

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

          <section
            className="content-card activities"
            id="atividades"
          >

            <div className="section-title">
              <div>
                <span className="section-label">COMUNIDADE</span>
                <h2>Atividades</h2>
              </div>

              <span className="section-number">02</span>
            </div>

            <a href="#atividades" className="follower-link">
              ??? seguidores
            </a>

            <div className="activity-list">

              {posts.map((post) => (
                <article
                  className="activity-post"
                  key={post.id}
                >

                  <p className="activity-owner">
                    Nome Sobrenome {post.action} · 1 sem
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

            <div className="section-title">
              <div>
                <span className="section-label">TRAJETÓRIA</span>
                <h2>Experiências</h2>
              </div>

              <span className="section-number">03</span>
            </div>

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

              {experiences.map((experience) => (
                <div
                  className="timeline-item"
                  key={experience.id}
                >

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

          <section
            className="content-card education"
            id="formacao"
          >

            <div className="section-title">
              <div>
                <span className="section-label">APRENDIZADO</span>
                <h2>Formação acadêmica</h2>
              </div>

              <span className="section-number">04</span>
            </div>

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

          <section
            className="content-card languages"
            id="idiomas"
          >

            <div className="section-title">
              <div>
                <span className="section-label">COMUNICAÇÃO</span>
                <h2>Idiomas</h2>
              </div>

              <span className="section-number">05</span>
            </div>

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

          {/* PESSOAS QUE VIRAM O PERFIL */}

          <section className="sidebar-card">

            <div className="sidebar-heading">
              <div>
                <span className="section-label">SUA REDE</span>
                <h2>As pessoas também viram</h2>
              </div>
            </div>

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


          {/* SUGESTÕES */}

          <section
            className="sidebar-card"
            id="sugestoes"
          >

            <div className="sidebar-heading">
              <div>
                <span className="section-label">NOVAS CONEXÕES</span>
                <h2>Pessoas que talvez você conheça</h2>
              </div>
            </div>

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

          {/* RODAPÉ DA LATERAL */}

          <div className="sidebar-footer">
            <strong>NEXO</strong>
            <p>Conecte ideias. Construa oportunidades.</p>
            <span>Projeto acadêmico · 2026</span>
          </div>

        </aside>

      </div>

      {/* RODAPÉ */}

      <footer className="page-footer">
        <div className="footer-brand">
          <span className="brand-symbol">N</span>
          <strong>nexo</strong>
        </div>

        <p>Uma rede de ideias e oportunidades.</p>
      </footer>

    </main>
  );
}
