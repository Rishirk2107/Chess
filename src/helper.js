export const getCharacter = (fileIndex) => String.fromCharCode(fileIndex + 96);

export const createPosition=()=>{
    const position=new Array(8).fill('').map(x => new Array(8).fill(''));

    for(let i=0;i<8;i++){
        position[i][1]='wp';
        position[i][6]='bp';
    }

    position[0][0]='wr';
    position[1][0]='wn';
    position[2][0]='wb';
    position[3][0]='wq';
    position[4][0]='wk';
    position[5][0]='wb';
    position[6][0]='wn';
    position[7][0]='wr';
    
    position[0][7]='br';
    position[1][7]='bn';
    position[2][7]='bb';
    position[3][7]='bq';
    position[4][7]='bk';
    position[5][7]='bb';
    position[6][7]='bn';
    position[7][7]='br';
    return position;
}

export const copyPosition=position=>{
    const newposition=new Array(8).fill('').map(x => new Array(8).fill(''));

    for(let rank=0;rank<8;rank++){
        for(let file=0;file<8; file++){
            newposition[rank][file]= position[rank][file];
        }
    }
    return newposition
}