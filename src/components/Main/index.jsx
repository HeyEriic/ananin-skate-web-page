import "./style.css";

export default function Main() {
  return (
    <main className="grid-container">
      <div className="grid-item large">
        <h2>Título do Conteúdo</h2>
        <img
          id="image_1"
          src="/images/skate_image_1.jpg"
          alt="Descrição da imagem"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nihil
          suscipit expedita amet laboriosam distinctio quod consequatur, maiores
          minima quam consectetur quasi, dolores doloribus et beatae
          repellendus, quae atque excepturi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae voluptas autem reprehenderit rerum nam quis magnam asperiores nihil accusantium beatae dolorem earum fugit et libero impedit doloribus similique, vel quos.
        </p>
        <hr id="line"/>
      </div>
      <div className="grid-item small">
        <h2>Título do Conteúdo</h2>
        <img
          id="image_2"
          src="/images/skate_image_2.jpg"
          alt="Descrição da imagem"
        />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis unde
          amet officia magnam, nemo, modi autem accusamus temporibus
          voluptatibus delectus voluptatem placeat. Quo repudiandae repellendus,
          eum temporibus dolor sit quam..
        </p>
        <hr id="line"/>
      </div>
      <div className="grid-item small">
        <h2>Título do Conteúdo</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          dolores eaque, explicabo dignissimos quaerat temporibus cum est omnis
          impedit praesentium blanditiis illo ea, vitae itaque. Sapiente saepe
          aliquid assumenda nihil? Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit totam ipsam esse at temporibus, commodi sunt dicta aliquam ea aut eaque libero sequi laborum voluptatum excepturi reiciendis culpa saepe ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione hic qui veritatis aspernatur alias dicta suscipit quaerat facere a harum odio recusandae quas, beatae necessitatibus voluptatum soluta obcaecati, provident in? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti veniam totam, vero cum non sint nisi porro ipsum sapiente illo ad fugiat? Impedit, sunt doloremque maxime quam eos eligendi explicabo.
        </p>
        <hr id="line"/>
      </div>
      <div className="grid-item small">
        <h2>Título do Conteúdo</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          dolores eaque, explicabo dignissimos quaerat temporibus cum est omnis
          impedit praesentium blanditiis illo ea, vitae itaque. Sapiente saepe
          aliquid assumenda nihil?
        </p>
        <hr id="line"/>
      </div>
    </main>
  );
}
