function t(t){let e=[];for(let s=0;s<t[0].length;s++){e[s]=[];for(let a=0;a<t.length;a++)e[s][a]=t[a][s]}return e}const e=new class{constructor(t=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]){this.state=t,this.score=0,this.status="idle"}moveLeft(){if("playing"!==this.status)return;let t=this.deepCopyState();for(let t=0;t<this.state.length;t++){let e=this.state[t].filter(t=>0!==t);for(let t=0;t<e.length-1;t++)e[t]===e[t+1]&&(e[t]*=2,this.score+=e[t],e[t+1]=0);for(e=e.filter(t=>0!==t);e.length<4;)e.push(0);this.state[t]=e}this.hasStateChanged(t)&&this.addRandomTile()}moveRight(){if("playing"!==this.status)return;let t=this.deepCopyState();for(let t=0;t<this.state.length;t++){let e=this.state[t].reverse().filter(t=>0!==t);for(let t=0;t<e.length-1;t++)e[t]===e[t+1]&&(e[t]*=2,this.score+=e[t],e[t+1]=0);for(e=e.filter(t=>0!==t);e.length<4;)e.push(0);this.state[t]=e.reverse()}this.hasStateChanged(t)&&this.addRandomTile()}moveUp(){if("playing"!==this.status)return;let e=this.deepCopyState(),s=t(this.state);for(let t=0;t<s.length;t++){let e=s[t].filter(t=>0!==t);for(let t=0;t<e.length-1;t++)e[t]===e[t+1]&&(e[t]*=2,this.score+=e[t],e[t+1]=0);for(e=e.filter(t=>0!==t);e.length<4;)e.push(0);s[t]=e}this.state=t(s),this.hasStateChanged(e)&&this.addRandomTile()}moveDown(){if("playing"!==this.status)return;let e=this.deepCopyState(),s=t(this.state);for(let t=0;t<s.length;t++){let e=s[t].reverse().filter(t=>0!==t);for(let t=0;t<e.length-1;t++)e[t]===e[t+1]&&(e[t]*=2,this.score+=e[t],e[t+1]=0);for(e=e.filter(t=>0!==t);e.length<4;)e.push(0);s[t]=e.reverse()}this.state=t(s),this.hasStateChanged(e)&&this.addRandomTile()}getScore(){return this.score}getState(){return this.state}getStatus(){return this.status}start(){"idle"===this.status&&(this.status="playing",this.addRandomTile(),this.addRandomTile())}restart(){this.status="idle",this.score=0,this.state=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]}hasEmptyCells(){for(let t of this.state)if(t.includes(0))return!0;return!1}canCombine(){for(let t=0;t<this.state.length;t++)for(let e=0;e<this.state[t].length;e++){let s=this.state[t][e];if(t>0&&this.state[t-1][e]===s||t<3&&this.state[t+1][e]===s||e>0&&this.state[t][e-1]===s||e<3&&this.state[t][e+1]===s)return!0}return!1}checkGameState(){for(let t of this.state)if(t.includes(2048)){this.status="win";return}this.canCombine()||this.hasEmptyCells()||(this.status="lose")}addRandomTile(){let t=[];for(let e=0;e<this.state.length;e++)for(let s=0;s<this.state[e].length;s++)0===this.state[e][s]&&t.push({row:e,col:s});if(t.length>0){let e=t[Math.floor(Math.random()*t.length)];this.state[e.row][e.col]=.9>Math.random()?2:4}}hasStateChanged(t){for(let e=0;e<this.state.length;e++)for(let s=0;s<this.state[e].length;s++)if(this.state[e][s]!==t[e][s])return!0;return!1}deepCopyState(){return this.state.map(t=>[...t])}};l();const s=document.querySelector(".button"),a=document.querySelector(".message-start"),r=document.querySelector(".message-lose"),i=document.querySelector(".message-win");function l(){let t=document.querySelectorAll(".field-cell");for(let s=0;s<e.state.length;s++)for(let a=0;a<e.state[s].length;a++){let r=e.state[s][a],i=t[4*s+a];i.className="field-cell",0!==r&&(i.textContent=r,i.classList.add(`field-cell--${r}`)),0===r&&(i.textContent="")}document.querySelector(".game-score").textContent=e.score}s.addEventListener("click",()=>{"idle"===e.status?(e.start(),a.classList.add("hidden"),s.textContent="Restart",s.classList.remove("start"),s.classList.add("restart")):(e.restart(),s.textContent="Start",s.classList.remove("restart"),s.classList.add("start"),a.classList.remove("hidden"),r.classList.add("hidden"),i.classList.add("hidden")),l()}),document.addEventListener("keydown",t=>{let s=t.key;if("playing"===e.status){switch(s){case"ArrowUp":e.moveUp();break;case"ArrowDown":e.moveDown();break;case"ArrowLeft":e.moveLeft();break;case"ArrowRight":e.moveRight();break;default:return}l(),e.checkGameState(),"lose"===e.status&&r.classList.remove("hidden"),"win"===e.status&&i.classList.remove("hidden")}});
//# sourceMappingURL=index.b1c0afbe.js.map
