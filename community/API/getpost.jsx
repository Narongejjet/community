const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql2');
const cors = require('cors');
const { lime } = require('@mui/material/colors');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'testpost'
});

app.use(cors())

// api for test
app.get('/api/attractions', function (req, res, next) {
    // เอาไว้เลือก page
    const page = parseInt(req.query.page);
    const per_page = parseInt(req.query.per_page);
    // เรียงลำดับ
    const sort_column = req.query.sort_column;
    const sort_direction = req.query.sort_direction;
    // ค้นหา
    const search = req.query.search;
    // เลือกว่าเริ่มจากหน้าไหนถึงหน้าไหน
    const start_idx = (page - 1) * per_page;

    var params = [];
    var sql = 'SELECT * FROM attractions ';
    if (search) {
        sql += ' WHERE name LIKE ?'
        params.push('%' + search + '%')
    }
    if (sort_column) {
        sql += ' ORDER BY ' + sort_column + ' ' + sort_direction;
    }
    sql += ' LIMIT ?, ?'
    params.push(start_idx)
    params.push(per_page)

    connection.execute(sql, params,
        function (err, results, fields) {
            // simple query
            connection.query(
                'SELECT COUNT (id) as total FROM attractions',
                function (err, counts, fields) {
                    const total = counts[0]['total'];
                    const total_pages = Math.ceil(total/per_page)
                    res.json({
                        page: page,
                        per_page: per_page,
                        total_pages: total_pages,
                        total: total,
                        data: results
                    })
            }
            );
           
        }
    );
});

app.post('/users', (req, res) => {
    // สร้างผู้ใช้งานใหม่โดยใช้ข้อมูลจาก request body
    // แล้วเพิ่มข้อมูลลงในฐานข้อมูล
});

app.get('/posts', (req, res) => {
    // ค้นหาโพสต์ทั้งหมดจากฐานข้อมูล
    // แล้วส่งกลับเป็น JSON
});

app.post('/posts', (req, res) => {
    // สร้างโพสต์ใหม่โดยใช้ข้อมูลจาก request body
    // แล้วเพิ่มข้อมูลลงในฐานข้อมูล
    const imageData = req.body.image;
    const sql = 'INSERT INTO posts (user_id, post_content, ImageData, created_at) VALUES (?, ?, ?, NOW())';
    const values = [1, 'This is my post', imageData];

    pool.query(sql, values, (error, results, fields) => {
        if (error) {
            console.error('Error uploading image:', error);
            res.status(500).json({ message: 'Error uploading image' });
        } else {
            res.json({ message: 'Image uploaded successfully' });
        }
    });
});

app.listen(5000, () => {
    console.log('Server started on port 5000');
});
