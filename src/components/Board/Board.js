import './Board.css';
import Ranks from './bits/Ranks'
import Files from './bits/Files'
import Pieces from '../Pieces/Pieces';

const Board = () => {
    const getClassName = (i, j) => {
        let c = 'tile ';
        c += (i + j) % 2 === 0 ? 'tile--dark' : 'tile--light';
        return c;
    };

    const ranks = Array(8).fill().map((_, i) => 8 - i);
    const files = Array(8).fill().map((_, i) => i+1);

    return (
        <div className="board">
            <Ranks ranks={ranks}/>
            <div className="tiles">
                {ranks.map((rank, i) =>
                    files.map((file, j) => (
                        <div key={`${rank}${file}`} className={getClassName(9-i, j)}>
                            
                        </div>
                    ))
                )}
            </div>

            <Pieces/>

            <Files files={files}/>
        </div>
    );
};

export default Board;
