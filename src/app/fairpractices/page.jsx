import React from 'react';

const FairPractices = () => {
    return (
        <div className="w-full bg-[#F8FAFC] min-h-screen font-sans text-slate-700">

            {/* --- Page Header --- */}
            <div className="bg-[#6D3078] py-12 md:py-16 text-center px-6 relative overflow-hidden">
                {/* Abstract Background Decoration */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
                        <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
                    </svg>
                </div>

                <h1 className="text-3xl md:text-5xl font-bold text-white relative z-10 mb-4">
                    Fair Practices Code
                </h1>
                <p className="text-white/80 max-w-2xl mx-auto text-sm md:text-base relative z-10">
                    Commitment to Transparency and Integrity in All Our Dealings
                </p>
            </div>

            {/* --- Content Container --- */}
            <div className="container mx-auto px-6 md:px-12 py-12 max-w-5xl">

                {/* Intro */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 mb-8">
                    <p className="leading-relaxed mb-4">
                        <span className="font-bold text-[#F47E4D]">Maitrii Loan</span> (Hereinafter referred to as “Company” or “Greenwings Innovative”) is a Non Deposit Taking NBFC registered with the Reserve Bank of India. This document provides details of the practices which Greenwings Innovative follows to ensure fair and transparent dealings with its customers and is compliant with the RBI Circular DNBR (PD) as may be updated from time to time (“Guidelines”).
                    </p>
                </div>

                {/* Application of the Code */}
                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-[#6D3078] mb-4 border-b border-slate-200 pb-2">
                        Application of the Code
                    </h2>
                    <ul className="list-disc list-outside ml-5 space-y-3 text-slate-600">
                        <li>This code shall apply to all authorized personals it in the course of its business with respect to all products and services.</li>
                        <li>Company shall adhere to this code to act fairly and reasonably in all dealings, on the ethical principle of integrity and transparency, to meet the standard practices prevalent in the finance industry.</li>
                        <li>
                            The Company will provide clear and transparent information to customers in the language of their preference so as to enable them to understand:
                            <ul className="list-circle list-outside ml-5 mt-2 space-y-2">
                                <li>Terms and conditions of the products and services offered including the interest rate and service charges.</li>
                                <li>Benefits available to customers.</li>
                            </ul>
                        </li>
                        <li>Products and services of the company will meet relevant laws and regulations in both letter and spirit.</li>
                        <li>The Company will act quickly in correcting mistakes and attending to complaints lodged by its customers.</li>
                        <li>The Company shall not discriminate amongst its prospective/existing customers on the basis of age, race, caste, gender, marital status, religion or disability.</li>
                        <li>A copy of the code will be posted on the Company's website and in a visible location at each branch office.</li>
                        <li>A copy of the code may be provided on request to any prospective or existing customer.</li>
                    </ul>
                </section>

                {/* (i) Application for loans and their processing */}
                <section className="mb-10">
                    <h2 className="text-xl font-bold text-[#F47E4D] mb-4">
                        (i) Application for loans and their processing
                    </h2>
                    <ul className="list-disc list-outside ml-5 space-y-3 text-slate-600">
                        <li>All communication to the borrower shall be explained to the borrower in the language understood by the borrower.</li>
                        <li>Loan application forms shall include necessary information that affects the interest of the borrower and an informed decision can be taken.</li>
                        <li>Acknowledgement for receipt of all loan applications will be given to the borrower.</li>
                        <li>Generally, all particulars required for processing the Loan Application will be collected by the Company at the time of application. In case it needs any additional information, the customer will be informed to provide the same.</li>
                        <li>The Company may verify the details mentioned by the customer in the loan application by contacting him/her at his/her residence and/or on business telephone numbers and/or physically visiting his/her residence and/or business addresses through agencies appointed for this purpose, if deemed necessary.</li>
                    </ul>
                </section>

                {/* (ii) Loan appraisal and terms/conditions */}
                <section className="mb-10">
                    <h2 className="text-xl font-bold text-[#F47E4D] mb-4">
                        (ii) Loan appraisal and terms/conditions
                    </h2>
                    <ul className="list-disc list-outside ml-5 space-y-3 text-slate-600">
                        <li>Every loan approval shall be communicated to the borrower by way of a Sanction Letter which shall include the key terms and conditions of the loan including the loan amount approved, processing fees, annualized rate of interest, tenor of the loan, penal charges, etc. Contents shall be explained to the borrower in a language understood by the borrower.</li>
                        <li>A copy of the loan agreement shall be given to the borrower for records and the contents explained in a language understood by the borrower.</li>
                    </ul>
                </section>

                {/* (iii) Disbursement of loans including changes in terms & conditions */}
                <section className="mb-10">
                    <h2 className="text-xl font-bold text-[#F47E4D] mb-4">
                        (iii) Disbursement of loans including changes in terms & conditions
                    </h2>
                    <ul className="list-disc list-outside ml-5 space-y-3 text-slate-600">
                        <li>Should there be any changes in the terms and conditions, a notice shall be given in a language understood by the borrower indicating the change of terms. Changes in the interest rates and charges shall be effected only prospectively.</li>
                        <li>Any decision to recall/accelerate payment or performance shall be in consonance with the loan agreement.</li>
                        <li>All securities shall be released on repayment of all dues or on realization of the outstanding amount as long as the Company's legitimate right or lien for any other claim is not violated. If such set-off is to be exercised, the Company shall give notice about the same with full particulars to the borrower.</li>
                    </ul>
                </section>

                {/* (iv) General */}
                <section className="mb-10">
                    <h2 className="text-xl font-bold text-[#F47E4D] mb-4">
                        (iv) General
                    </h2>
                    <ul className="list-disc list-outside ml-5 space-y-3 text-slate-600">
                        <li>Greenwings Innovative will not interfere in the affairs of the borrower except for the purposes provided in the terms and conditions of the Sanction Letter and Loan Agreement unless new information, not earlier disclosed by the borrower comes to the notice of the Company.</li>
                        <li>For any request for Balance Transfer received from the borrower, the consent or otherwise shall be communicated within 21 days of receipt of request. Such transfer shall be as per transparent contractual terms in consonance with the law.</li>
                        <li>Greenwings Innovative shall not resort to undue harassment for recovery of dues. Proper training shall be given to the field staff to ensure that borrowers are dealt in an appropriate manner.</li>
                        <li>The Board of the Company shall review the Redressal of grievances at regular intervals.</li>
                        <li>The management shall place before the board the status of all complaints at regular intervals.</li>
                        <li>The details of the Grievance Redressal Officer (including name, address, contact number, email ID, etc) shall be prominently displayed at the branches and also posted on the website.</li>
                        <li>In case the complaint is not redressed within a period of one month, the borrower may appeal to the Officer in Charge of the Regional Office of the Department of Non-Banking Supervision, Jaipur under whose jurisdiction the registered office of the Company falls.</li>
                    </ul>
                </section>

                {/* Additional Sections */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                        <h3 className="text-lg font-bold text-[#6D3078] mb-3">Privacy</h3>
                        <p className="text-sm leading-relaxed text-slate-600">
                            The Company will gather individual data that it accepts to be significant and required to comprehend the clients profiles and direct its business. The Company shall treat all close to home data of clients as private and classified and will not reveal any data to a third individual except unless required by any law or Government authorities including Regulators or Credit offices or where the sharing of data is allowed by the client. In the event that the company will profit services of any outsider for providing support services, Company will necessitate that such outsiders handle clients' personal data with the same level of confidentiality.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                        <h3 className="text-lg font-bold text-[#6D3078] mb-3">Promoting, Marketing and Sales</h3>
                        <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-slate-600">
                            <li>The Company will ensure that all advertising and promotional material is clear, and not misleading.</li>
                            <li>The Company may, from time to time, inform clients of various features of their products availed by them. Information about their other products or promotional offers in regard to products/services might be communicated to clients only if they have given their consent to receive such information/services.</li>
                        </ul>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                        <h3 className="text-lg font-bold text-[#6D3078] mb-3">Underwriters</h3>
                        <p className="text-sm leading-relaxed text-slate-600 mb-2">When an individual is considered an underwriter to a loan, the company will inform him/her the following under confirmation:</p>
                        <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-slate-600">
                            <li>Letter/Deed of Guarantee stating the terms of liability as an underwriter.</li>
                            <li>The company will keep him/her informed of any default in the servicing of the loan by the borrower to whom he/she stands as an underwriter.</li>
                        </ul>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                        <h3 className="text-lg font-bold text-[#6D3078] mb-3">Credit Bureau/Reference Offices</h3>
                        <p className="text-sm leading-relaxed text-slate-600 mb-2">The Company may offer information to Credit Bureau/Reference offices about the individual obligations, the client owes to it if:</p>
                        <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-slate-600">
                            <li>The client has fallen behind with his/her installments.</li>
                            <li>Legal procedures have been started against the client to recover the debt.</li>
                            <li>Obligations settled through legal recourses against the client.</li>
                            <li>It is mandated by law/plan with Credit Bureau to provide information about every such client to such organizations. A provision with this effect has been incorporated in the Loan Agreement seeking the client's consent to share information on his loan with Credit Bureaus.</li>
                        </ul>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default FairPractices;