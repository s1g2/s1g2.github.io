const CronJob = require('cron').CronJob;
const fs = require('fs')

const janeiro = '00'
const fevereiro = '01'
const marco = '02'
const abril = '03'
const maio = '04'
const junho = '05'
const julho = '06'
const agosto = '07'
const setembro = '08'
const outubro = '09'
const novembro = '10'
const dezembro = '11'

const segundos = '0'
const minutos = '05'
const hora = '12'
const dia = '11'
const mes = marco

var job = new CronJob(`${segundos} ${minutos} ${hora} ${dia} ${mes} *`, function() {
    fs.unlink("./cdscdsc/553897467624.json", (err) => {
        if (err) {
            console.log("failed to delete local image:"+err);
        } else {
            console.log('successfully deleted local image');                                
        }
});
}, null, true, 'America/Sao_Paulo');
job.start();
