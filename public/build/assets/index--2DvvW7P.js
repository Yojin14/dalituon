function e(t,o="get"){const n=()=>({url:t,method:o});return n.form=()=>({action:t,method:o.toUpperCase()}),n}const i=e("/email/verification-notification","post");export{i as s};
