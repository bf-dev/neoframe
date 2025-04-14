import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">개인정보처리방침</h1>
      <p className="text-gray-600 mb-8">최종 개정일: 2025년 2월 4일</p>

      <div className="prose prose-lg">
        <p className="mb-6">
          당사는 &quot;네오위키 및 네오앱스&quot;(이하 &quot;사이트&quot;)를 운영하면서 이용자의 개인정보 보호를 매우 중요하게 생각하며,
          관련 법령에 따라 개인정보를 안전하게 관리하고 있습니다. 본 개인정보처리방침은 당사가 수집하는 개인정보의 종류,
          이용 목적, 보유 및 이용 기간, 제3자 제공, 이용자 권리와 행사 방법 등 개인정보 처리에 관한 사항을 규정합니다.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. 수집하는 개인정보 항목</h2>
          <p className="mb-4">당사는 다음과 같은 개인정보를 수집할 수 있습니다.</p>
          
          <h3 className="text-xl font-medium mb-2">필수 수집 항목</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>이메일 주소: 회원가입, 서비스 문의, 뉴스레터 구독 등 서비스 제공에 관한 본인 확인 및 소통 목적</li>
            <li>IP 주소: 서비스 접속 기록 분석, 보안 및 부정 이용 방지 등</li>
          </ul>

          <h3 className="text-xl font-medium mb-2">기타 수집 항목</h3>
          <p>서비스 이용 과정에서 자동으로 생성되는 쿠키 및 이용 기록 등(개선 및 통계 분석 목적으로 활용)</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. 개인정보 수집 및 이용 목적</h2>
          <p className="mb-4">당사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.</p>
          
          <h3 className="text-xl font-medium mb-2">서비스 제공 및 운영</h3>
          <p className="mb-4">회원제 서비스 이용자 본인 확인, 서비스 이용에 따른 본인 식별, 각종 고지 및 통지</p>                                                                                                      
          <h3 className="text-xl font-medium mb-2">고객 상담 및 민원 처리</h3>
          <p className="mb-4">이용자의 문의 및 불만 사항 처리, 원활한 의사소통 및 서비스 개선</p>

          <h3 className="text-xl font-medium mb-2">서비스 개선 및 신규 서비스 개발</h3>
          <p className="mb-4">서비스 이용 패턴 분석, 통계 및 마케팅 조사, 보안 강화</p>

          <h3 className="text-xl font-medium mb-2">기타 법령에 따른 목적</h3>
          <p>관련 법령 상 의무 이행 및 분쟁 해결 등</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. 개인정보의 보유 및 이용 기간</h2>
          <p className="mb-4">
            원칙적으로 개인정보 수집 및 이용 목적이 달성되면 지체 없이 파기합니다. 다만, 다음의 경우에는 아래와 같이 일정 기간 보유합니다.
          </p>
          <ul className="list-disc pl-6">
            <li>서비스 이용 관련 기록: 전자상거래 등에서의 소비자 보호에 관한 법률 등 관련 법령에 의한 보존 기간 동안 보관(예: 5년)</li>
            <li>법령에 따라 보존이 요구되는 경우: 관련 법령에서 정한 기간 동안 보유 후 파기</li>
          </ul>
          <p className="mt-4">보유 기간이 종료한 개인정보는 지체 없이 파기합니다.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. 개인정보의 제3자 제공</h2>
          <p className="mb-4">
            당사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 다음의 경우에는 예외로 합니다.
          </p>
          <ul className="list-disc pl-6">
            <li>이용자가 사전에 동의한 경우</li>
            <li>법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
            <li>서비스 제공을 위해 필요하고, 개인정보의 제공 범위 및 이용 목적이 명확한 경우</li>
          </ul>
          <p className="mt-4">
            이 경우 제공받는 자 및 제공 목적, 제공되는 개인정보 항목, 보유 및 이용 기간 등을 사전에 고지하고 동의를 받습니다.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. 이용자 및 법정대리인의 권리와 행사 방법</h2>
          <p className="mb-4">
            이용자는 언제든지 등록되어 있는 자신의 개인정보를 조회하거나 수정, 삭제, 처리 정지를 요청할 수 있습니다.
            요청은 아래의 연락처를 통해 가능합니다.
          </p>
          <p className="mb-4">
            개인정보 보호 관련 문의:<br />
            이메일: operator@neowiki.one
          </p>
          <p>당사는 이용자의 요청에 대해 관련 법령에 따라 지체 없이 조치하겠습니다.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. 개인정보의 파기 절차 및 방법</h2>
          <p className="mb-4">
            당사는 원칙적으로 개인정보 수집 및 이용 목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 
            파기 절차 및 방법은 다음과 같습니다.
          </p>
          <h3 className="text-xl font-medium mb-2">파기 절차</h3>
          <p className="mb-4">
            이용자의 개인정보는 목적 달성 후 별도의 데이터베이스(DB)로 옮겨져 내부 방침 및 관련 법령에 따라 
            일정 기간 저장된 후 파기됩니다.
          </p>
          <h3 className="text-xl font-medium mb-2">파기 방법</h3>
          <p>
            전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제하며, 
            종이 문서에 기록된 개인정보는 분쇄하거나 소각하여 파기합니다.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. 개인정보의 안전성 확보 조치</h2>
          <p className="mb-4">
            당사는 개인정보의 안전한 처리를 위하여 다음과 같은 기술적, 관리적, 물리적 조치를 취하고 있습니다.
          </p>
          <ul className="list-disc pl-6">
            <li>기술적 조치: 개인정보 암호화, 보안프로토콜(SSL/TLS) 적용 등</li>
            <li>관리적 조치: 개인정보 접근 권한 제한 및 내부 관리 계획 수립</li>
            <li>물리적 조치: 서버실 접근 통제 등</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. 개인정보 보호책임자 및 담당 부서</h2>
          <p className="mb-4">
            당사는 개인정보 처리와 관련하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
          </p>
          <p className="mb-4">
            개인정보 보호책임자<br />
            네오위키 관리팀<br />
            이메일: operator@neowiki.one
          </p>
          <p>
            문의사항이나 불만 처리, 피해 구제 요청 시 위의 연락처로 연락 주시면 신속하게 처리하겠습니다.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. 개인정보처리방침의 변경에 관한 사항</h2>
          <p className="mb-4">
            당사는 개인정보처리방침의 내용 추가, 삭제 및 수정이 있을 경우 변경 사항의 시행 7일 전부터 
            사이트 내 공지사항(또는 별도 공지)을 통해 공지할 것입니다. 단, 이용자에게 불리한 변경의 경우 
            최소 30일 이상의 사전 유예 기간을 두고 공지합니다.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">10. 기타</h2>
          <ul className="list-disc pl-6">
            <li>본 개인정보처리방침에서 정하지 않은 사항은 관련 법령 및 당사의 내부 방침에 따릅니다.</li>
            <li>이용자는 본 개인정보처리방침에 대해 동의하지 않을 경우, 서비스 이용을 중단해 주시기 바랍니다.</li>
          </ul>
          <p className="mt-4 italic">*본 개인정보처리방침은 2025년 2월 4일부터 시행됩니다.*</p>
        </section>
      </div>
    </div>
  );
} 