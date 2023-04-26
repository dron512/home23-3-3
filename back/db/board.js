// Sequelize를 사용하기 위한 모듈 로드
const Sequelize = require('sequelize');
require('dotenv').config();

const DBHOST = process.env.DBHOST;
const DBNAME = process.env.DB_NAME;
const DBUSER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

// Sequelize 인스턴스 생성
const sequelize = new Sequelize( DBNAME, DBUSER , DB_PASSWORD, {
  host: DBHOST,
  dialect: 'mysql' // 사용하는 데이터베이스 종류에 따라 변경 가능
});
const Board = sequelize.define('board', {
    id:{
        type:Sequelize.INTEGER,
        primaryKey: true, // 기본키로 지정
        autoIncrement: true  // 자동증가 될수 있도록 
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    writer: {
        type: Sequelize.STRING,
        allowNull: false
    },
});

// 테이블 생성
Board.sync(/*{ force: true }*/).then(() => {
    console.log('테이블이 생성되었습니다.');
});

module.exports = {sequelize,Board}