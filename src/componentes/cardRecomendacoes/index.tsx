import { Paper } from '@mui/material';
import IRecomendacoes from '../../interfaces/IRecomendacoes';

import { useRef } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
interface props {
  recomendacoes: IRecomendacoes[];
}

const CardRecomendacoes = ({ recomendacoes }: props) => {
  const carousel = useRef<HTMLDivElement | null>(null);
  const handleRightClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    console.log(carousel.current?.offsetWidth);
    if (carousel.current) {
      carousel.current.scrollLeft += carousel.current.offsetWidth;
    }
  };
  const handleLeftClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (carousel.current) {
      carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }
  };
  const UrlPassaporte =
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAyNCAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0uNTY0IDQuMTMzQzEzLjYyIDEuNCAyMC4yMjguMDI2IDIwLjM4NC4wMTFjLjIzNi0uMDIyLjk2LS4wOTMuOTYuNzcydjQuNTI5SC41NTlDLjMxMSA1LjMxMiAwIDUuMjYxIDAgNC43NDRjMC0uMzQ1LjE4OC0uNTQ5LjU2NC0uNjF6IiBmaWxsPSIjRkZCQ0JGIi8+PHBhdGggZD0iTTAgNC43MzdjLjAxMy4zNjUuMi41NTQuNTU4LjU2OWgyMi40OTVjLjI5NyAwIC41MzguMjQuNTM4LjUzOHYyNS4wNzNhLjUzOC41MzggMCAwMS0uNTM4LjUzOEgyLjk1QTIuOTQ5IDIuOTQ5IDAgMDEwIDI4LjUwNlY0LjczN3oiIGZpbGw9IiNGRjdBODAiLz48cGF0aCBkPSJNNS42MTcgMjQuNjMzSDExLjdjMy40NjUgMCA2LjI3NC0yLjkyNiA2LjI3NC02LjUzNyAwLTMuNjEtMi44MDktNi41MzctNi4yNzQtNi41MzdINS42MTd2MTMuMDc0eiIgZmlsbD0iI0ZGQkNCRiIvPjxwYXRoIGQ9Ik01LjY0NyAxMS41NTloLS4wM3YxMy4wNzRoLjAzYzMuNjAzIDAgNi41MjMtMi45MjYgNi41MjMtNi41MzcgMC0zLjYxLTIuOTItNi41MzctNi41MjMtNi41MzciIGZpbGw9IiNGRkYiLz48L2c+PC9zdmc+';
  return (
    <div className="carrossel__container">
      <div className="carrossel__wrapper" ref={carousel}>
        <div className="carrossel">
          <button className="button__left" onClick={(e) => handleLeftClick(e)}>
            <ArrowBackIosIcon />
          </button>
          {recomendacoes.map((item) => (
            <Paper
              elevation={8}
              key={item.titulo}
              className="card"
              sx={{ borderRadius: 2, width: 300 }}
            >
              <div className="card__container">
                <div className="card__border">
                  <div className="card__imagem">
                    <img src={item.imagem} alt="" />
                  </div>
                  <div className="card__conteudo">
                    <p className="card__conteudo__tipo">{item.tipo}</p>
                    <h2 className="card__conteudo__titulo">{item.titulo}</h2>
                    <p className="card__conteudo__infos">{item.infos}</p>
                  </div>
                </div>
                <div className="card__preco">
                  <p className="card__preco__infos">{item.preco}</p>
                  <div className="card__preco__pontos">
                    <img src={UrlPassaporte} alt="" />
                    <p className="card__preco__pontos__p">
                      {item.pontos.toLocaleString()}
                    </p>
                    <p className="card__preco__infos pontos">Pontos</p>
                  </div>
                </div>
              </div>
            </Paper>
          ))}
          <button
            className="button__right"
            onClick={(e) => handleRightClick(e)}
          >
            <ArrowForwardIosIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardRecomendacoes;
