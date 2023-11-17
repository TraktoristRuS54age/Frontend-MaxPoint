import style from "./WorkSpace.module.css";
import Left_ToolBar from "../Left_ToolBar/Left_ToolBar";
import MainWS from "../MainWS/MainWS.tsx";
import Presentation from "../../types/types.ts"

function WorkSpace () {
	return (
		<div className={style.grid_block}>
			<Left_ToolBar />

			<section className={style.working_block_grid}>
				<MainWS 
				slide = {Presentation.currentslide}/>

				<div className={style.slide_block}>
						<div className={style.slide_block__item}>

							<div className={style.slide}>
									<h2>Слайд 1</h2>
							</div>

							<div className={style.slide}>
									<h2>Слайд 2</h2>
							</div>

							<div className={style.slide}>
									<h2>Слайд 3</h2>
							</div>

							<div className={style.slide}>
									<h1 className={style.slide_plus}>+</h1>
							</div>

						</div>
				</div>
			</section>
		</div> 
	);
}

export default WorkSpace;