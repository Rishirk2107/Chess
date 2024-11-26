import './Files.css';
import { getCharacter } from '../../../helper';

const Files = ({ files }) => (
    <div className="files">
        {files.map((file, index) => (
            <span key={file}>{getCharacter(index + 1)}</span>
        ))}
    </div>
);

export default Files;
