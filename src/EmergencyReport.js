import React, { useState } from "react";
import Swal from 'sweetalert2';
import './impasto.css';

export default function EmergencyReport() {
  const [userType, setUserType] = useState("");
  const [symptoms, setSymptoms] = useState({});

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
    setSymptoms({});
  };

  const handleSymptomChange = (e) => {
    setSymptoms({ ...symptoms, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("신고 데이터:", symptoms);
    Swal.fire({
      icon: 'success',
      title: '신고 접수 완료',
      text: '가장 가까운 병원으로 내역이 전송되었습니다.',
      confirmButtonText: '확인',
      confirmButtonColor: '#e1a32d',
      background: '#fff8f0',
      color: '#2e160a'
    });
  };
  

  return (
    <div className="impasto-container">
      <div className="impasto-card">
        <h2 className="impasto-title">🎨 응급 상황 신고</h2>

        <label className="impasto-label">
          사용자 유형:
          <select onChange={handleUserTypeChange} className="impasto-select">
            <option value="">선택</option>
            <option value="citizen">일반 시민</option>
            <option value="paramedic">구급대원</option>
          </select>
        </label>

        {userType === "citizen" && (
          <div className="impasto-section">
            <h4>🧾 증상 선택 (일반인)</h4>

            <label className="impasto-label">
              출혈 여부:
              <select name="bleeding" onChange={handleSymptomChange} className="impasto-select">
                <option value="">선택</option>
                <option value="yes">있음</option>
                <option value="no">없음</option>
              </select>
            </label>

            <label className="impasto-label">
              의식 상태:
              <select name="citizenConsciousness" onChange={handleSymptomChange} className="impasto-select">
                <option value="">선택</option>
                <option value="alert">명료</option>
                <option value="lethargic">기면</option>
                <option value="semi-coma">반혼수</option>
                <option value="coma">혼수</option>
              </select>
            </label>
          </div>
        )}

        {userType === "paramedic" && (
          <div className="impasto-section">
            <h4>🩺 상세 증상 입력 (구급대원)</h4>

            <textarea
              name="detailedSymptoms"
              placeholder="호흡, 맥박, 피부 상태 등..."
              onChange={handleSymptomChange}
              rows={4}
              className="impasto-textarea"
            />

            <label className="impasto-label">
              의식 상태:
              <select name="paramedicConsciousness" onChange={handleSymptomChange} className="impasto-select">
                <option value="">선택</option>
                <option value="alert">명료</option>
                <option value="lethargic">기면</option>
                <option value="semi-coma">반혼수</option>
                <option value="coma">혼수</option>
              </select>
            </label>
          </div>
        )}

        {userType && (
          <button className="impasto-button" onClick={handleSubmit}>
            🚑 신고 제출
          </button>
        )}
      </div>
    </div>
  );
}
