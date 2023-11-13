import style from "./WorkSpace.module.css";
import Left_ToolBar from "../Left_ToolBar/Left_ToolBar";

function WorkSpace () {
	return (
		<div className={style.grid_block}>
			<Left_ToolBar />

			<section className={style.working_block_grid}>
				<div className={style.working_block}>
					<div className={style.working_block__items}>
						<p>Slide name</p>
					<div className={style.working_block__slide}></div>
				</div>
						
				</div>

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