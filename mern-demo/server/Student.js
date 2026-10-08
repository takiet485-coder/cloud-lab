const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  studentId: {
    type: String,
    required: [true, 'Mã sinh viên không được để trống'],
    unique: true // Đảm bảo mã sinh viên không bị trùng lặp
  },
  name: {
    type: String,
    required: [true, 'Họ tên sinh viên không được để trống']
  },
  email: {
    type: String,
    required: [true, 'Email không được để trống']
  },
  age: {
    type: Number
  },
  major: {
    type: String
  }
}, {
  timestamps: true // Tự động thêm createdAt và updatedAt
});

module.exports = mongoose.model('Student', studentSchema);