import * as mySvg from './svg.min.js';
import dataTemplate from './demo-data-template.js';

window.onload = (event) => {
 document.title = 'About Us';
 dataTemplate.renderBody('aboutUs.html');

 const main = document.getElementsByTagName('main')[0];
 const article = document.createElement('article');
 main.appendChild(article);

 article.innerHTML = `
 <style>

article{
line-height:1.6;
counter-reset:section;
}

h1{
font-weight:normal;font-size:40px; color:RoyalBlue;
}

h2{
counter-reset:subsection;
font-weight:normal; font-size:28px; color:teal;
margin-top:40px;
}

h2:before{
counter-increment:section;
content: counter(section) ". ";
}

h3:before{
counter-increment:subsection;
content:counter(section) "." counter(subsection) " ";
}

</style>


<h1>Terms Of Service</h1>
<h5>Last Modified: January 25, 2026</h5>

<p>
Welcome to Dolphin, the website and online service of Dolphin Services, Inc. ("Dolphin," "we," or "us"). This page explains the terms by which you may use our online services, web site, software, cloud computing platform, APIs, and all other services under Dolphin's control, provided on or in connection with the service (collectively, the "Service"). By accessing or using the Service, or by clicking a button or checking a box marked "I Agree" (or something similar), you signify that you have read, understood, and agree to be bound by these Terms of Service (this "Agreement"), our Acceptable Use Policy, our Data Processing Addendum, and to the collection and use of your information as set forth in our Privacy Policy, whether or not you are a registered user of our Service. Dolphin reserves the right to modify these terms and will provide notice of these changes as described below. This Agreement applies to all visitors, users, and others who access the Service ("Users").
</p>

<p>
Please read this Agreement carefully to ensure that you understand each provision. This agreement contains a mandatory individual arbitration and class action/jury trial waiver provision that requires the use of arbitration on an individual basis to resolve disputes, rather than jury trials or class actions.
</p>

<h2>Our Service</h2>
<ol>
<li>
Eligibility This is a contract between you and Dolphin. You must read and agree to these terms before using the Dolphin Service. If you do not agree, you may not use the Service. You may use the Service only if you can form a binding contract with Dolphin, and only in compliance with this Agreement and all applicable local, state, national, and international laws, rules and regulations. You are responsible for the acts of others utilizing your access to the Service and will be held responsible for violations of the Service by persons who gain access to the Service using your account or shared access. Any use or access to the Service by anyone under 16 is strictly prohibited and in violation of this Agreement. The Service is not available to any Users previously removed from the Service by Dolphin.
</li>

<li>
Limited License Subject to the terms and conditions of this Agreement, you are hereby granted a non-exclusive, limited, non-transferable, non-sublicensable, freely revocable license to use the Service for own use only and as permitted by the features of the Service. Dolphin reserves all rights not expressly granted herein in the Service and the Dolphin Content (as defined below). Dolphin may terminate this license at any time for any reason or no reason.
</li>

<li>
User Accounts Your account on the Service (your "User Account") gives you access to the services and functionality that we may establish and maintain from time to time and in our sole discretion. We may maintain different types of User Accounts for different types of Users. If you open a User Account on behalf of a company, organization, or other entity, then (i) "you" includes you and that entity, and (ii) you represent and warrant that you are an authorized representative of the entity with the authority to bind the entity to this Agreement, and that you agree to this Agreement on the entity's behalf. By connecting to Company with a third-party service, you give us permission to access and use your information from that service as permitted by that service, and to store your log-in credentials for that service.

<p>You may never use another User's User Account without permission. When creating your User Account, you must provide accurate and complete information, and you must keep this information up to date. You are solely responsible for the activity that occurs on your User Account, and you must keep your User Account password secure. We encourage you to use strong passwords (unguessable passwords of sufficient length and entropy) with your User Account. You must notify Dolphin immediately of any breach of security or unauthorized use of your User Account. Dolphin will not be liable for any losses caused by any unauthorized use of your User Account.</p>
</li>

<li>
Accepted Use Dolphin's Acceptable Use Policy is hereby incorporated by reference.
</li>

<li>
Changes to the Service We may, without prior notice, change the Service; stop providing the Service or features of the Service, to you or to Users generally; or create usage limits for the Service. We may permanently or temporarily terminate or suspend your access to the Service without notice and liability for any reason, including if in our sole determination you violate any provision of this Agreement, or for no reason. Upon termination for any reason or no reason, you continue to be bound by this Agreement.
</li>

<li>
Disputes with Other Users You are solely responsible for your interactions with other Users. We reserve the right, but have no obligation, to monitor disputes between you and other Users. Dolphin shall have no liability for your interactions with other Users, or for any User's action or inaction.
</li>

<li>
Export Control You shall comply with the U.S. Foreign Corrupt Practices Act and all applicable export laws, restrictions and regulations of the U.S. Department of Commerce, and any other applicable U.S. and foreign agency or authority. You represent and warrant that by using the Service, you are authorized to receive the Service, and you are not (and are not part of or a citizen or resident of or located in) (i) a person or entity or group or region that is the target of sanctions administered by U.S. Department of the Treasury's Office of Foreign Assets Control ("OFAC"), or other relevant sanctions authority, or owned fifty percent or more in the aggregate by such sanctioned parties, or (ii) Crimea, Donetsk, or Luhansk Regions of Ukraine, Cuba, Iran, North Korea or Syria or any other embargoed region. If you access or use the Service outside the United States, you are responsible for compliance with any applicable local law including, without limitation, import and export control laws. Violation of this Section 1.7 will result in immediate termination of this Agreement.
</li>
</ol>


<h2>User Content</h2>
<p>
The Service allows Users to submit, post, display, provide, or otherwise make available content such as profile information, comments, questions, source code, logs, and other content or information (any such materials a User submits, posts, displays, provides, or otherwise makes available on the Service is referred to as "User Content").
</p>

<p>
We claim no ownership rights over User Content created by you. The User Content you create remains yours. Company has the right (but not the obligation) in its sole discretion to monitor and/or remove any User Content on the Service. This includes, without limitation, User Content that violates these terms or our Acceptable Use Policy.
</p>

<p>
For the purposes of this Agreement, "Intellectual Property Rights" means all patent rights, copyright rights, mask work rights, moral rights, rights of publicity, trademark, trade dress and service mark rights, goodwill, trade secret rights and other intellectual property rights as may now exist or hereafter come into existence, and all applications therefore and registrations, renewals and extensions thereof, under the laws of any state, country, territory or other jurisdiction.
</p>

<p>
In connection with your User Content, you affirm, represent and warrant the following:
<ul>
<li>
You have obtained and are solely responsible for obtaining all consents as may be required by law to post any User Content relating to third parties.
</li>

<li>Your User Content and Dolphin's use thereof as contemplated by this Agreement and the Service will not violate any law or infringe any rights of any third party, including but not limited to any Intellectual Property Rights and privacy rights.
</li>
</ul>
</p>

<p>
Dolphin takes no responsibility and assumes no liability for any User Content that you or any other User or third-party posts, sends, or otherwise makes available over the Service. You shall be solely responsible for your User Content and the consequences of posting, publishing it, sharing it, or otherwise making it available on the Service, and you agree that we are only acting as a passive conduit for your online distribution and publication of your User Content. You understand and agree that you may be exposed to User Content that is inaccurate, objectionable, inappropriate for children, or otherwise unsuited to your purpose, and you agree that Dolphin shall not be liable for any damages you allege to incur as a result of or relating to any User Content.
</p>


<h2>Our Proprietary Rights</h2>
<p>
Except for your User Content, the Service and all materials therein or transferred thereby, including, without limitation, software, images, text, graphics, illustrations, logos, patents, trademarks, service marks, copyrights, photographs, audio, videos, music, and User Content belonging to other Users (the "Dolphin, Content"), and all Intellectual Property Rights related thereto, are the exclusive property of Dolphin, and its licensors (including other Users who post User Content to the Service). Except as explicitly provided herein, nothing in this Agreement shall be deemed to create a license in or under any such Intellectual Property Rights, and you agree not to sell, license, rent, modify, distribute, copy, reproduce, transmit, publicly display, publicly perform, publish, adapt, edit or create derivative works from any Dolphin, Content. Use of the Dolphin, Content for any purpose not expressly permitted by this Agreement is strictly prohibited.
</p>

<p>
You may choose to or we may invite you to submit comments or ideas about the Service, including without limitation about how to improve the Service or our products ("Ideas"). By submitting any Idea, you agree that your disclosure is gratuitous, unsolicited and without restriction and will not place Dolphin, under any fiduciary or other obligation, and that we are free to use the Idea without any additional compensation to you, and/or to disclose the Idea on a non-confidential basis or otherwise to anyone. You further acknowledge that, by acceptance of your submission, Dolphin, does not waive any rights to use similar or related ideas previously known to Dolphin,, or developed by its employees, or obtained from sources other than you.
</p>

<p>
The Service contains data, information, and other content not owned by you, such as credits offered by Dolphin, ("Dolphin, Property"). You understand and agree that regardless of terminology used, Dolphin, Property represents a limited license right governed solely by the terms of this Agreement and available for distribution at Dolphin's sole discretion. Dolphin, Property is not redeemable for any sum of money or monetary value from Dolphin, at any time. You acknowledge that you do not own the User Account you use to access the Service, nor do you possess any rights of access or rights to data stored by or on behalf of Dolphin, on Dolphin, servers, including without limitation any data representing or embodying any or all of your Dolphin, Property. You agree that Dolphin, has the absolute right to manage, regulate, control, modify and/or eliminate Dolphin, Property as it sees fit in its sole discretion, in any general or specific case, and that Dolphin, will have no liability to you based on its exercise of such right. All data on Dolphin's servers are subject to deletion, alteration or transfer. Notwithstanding any value attributed to such data by you or any third party, you understand and agree that any data, User Account history and User Account content residing on Dolphin's servers, may be deleted, altered, moved or transferred at any time for any reason in Dolphin's sole discretion, with or without notice and with no liability of any kind. Dolphin, does not provide or guarantee, and expressly disclaims, any value, cash or otherwise, attributed to any data residing on Dolphin's servers.
</p>


<h2>Paid Services</h2>
<ol>
<li><b>Billing Policies.</b>
Certain aspects of the Service may be provided for a fee or other charge. If you elect to use paid aspects of the Service, you agree to our Pricing and Payment Terms as we may update them from time to time. Dolphin may add new services for additional fees and charges, add or amend fees and charges for existing services, at any time in its sole discretion. Any change to our Pricing or Payment Terms shall become effective in the billing cycle following notice of such change to you as provided in this Agreement. We use Stripe as our third-party service provider for payment services. By using our Service, you agree to be bound by Stripe's Services Agreement available at https://stripe.com/us/legal.
</li>

<li><b>No Refunds.</b>
You may cancel your User Account at any time; however, there are no refunds for cancellation. In the event that Dolphin suspends or terminates your User Account or this Agreement, you understand and agree that you shall receive no refund or exchange for any Dolphin Property, any unused time on a subscription, any license or subscription fees for any portion of the Service, any content or data associated with your User Account, or for anything else. You are solely responsible for exporting your User Content from the Service prior to termination of your account for any reason.
</li>

<li><b>Payment Information.</b>
Taxes. All information that you provide in connection with a purchase or transaction or other monetary transaction interaction with the Service must be accurate, complete, and current. You agree to pay all charges incurred by users of your credit card, debit card, or other payment method used in connection with a purchase or transaction or other monetary transaction interaction with the Service at the prices in effect when such charges are incurred. You will pay any applicable taxes, if any, relating to any such purchases, transactions or other monetary transaction interactions.
</li>
</ol>


<h2>No Professional Advice</h2>
<p>
If the Service provides professional information (for example, legal or financial), such information is for informational purposes only and should not be construed as professional advice. No action should be taken based upon any information contained in the Service. You should seek independent professional advice from a person who is licensed and/or qualified in the applicable area.
</p>

<h2>Privacy</h2>
<p>
We care about the privacy of our Users. You understand that by using the Services you consent to the collection, use and disclosure of your personally identifiable information and aggregate and/or anonymized data as set forth in our Privacy Policy, and to have your personally identifiable information collected, used, transferred to and processed in the United States. Personal Data that you provide to the Service pursuant to this Agreement is subject to our Data Processing Addendum, available at: http://54.205.5.132:3000/privacy.html, which is incorporated into and forms part of this Agreement.
</p>


<h2>Security</h2>
<p>
Dolphin cares about the integrity and security of your personal information. Dolphin uses commercially reasonable physical, managerial, and technical safeguards to preserve the integrity and security of your personal information and implement your privacy settings. However, we cannot guarantee that unauthorized third parties will never be able to defeat our security measures or use your personal information for improper purposes. You acknowledge that you provide your personal information at your own risk.
</p>


<h2>DMCA Notice</h2>
<p>
Since we respect artist and content owner rights, it is our policy to respond to alleged infringement notices that comply with the Digital Millennium Copyright Act of 1998 ("DMCA").
</p>

<p>
If you believe that your copyrighted work has been copied in a way that constitutes copyright infringement and is accessible via the Service, please notify our copyright agent as set forth in the DMCA. For your complaint to be valid under the DMCA, you must provide the following information in writing:
</p>

<ol>
<li>An electronic or physical signature of a person authorized to act on behalf of the copyright owner;</li>

<li>Identification of the copyrighted work that you claim has been infringed;</li>

<li>Identification of the material that is claimed to be infringing and where it is located on the Service;</li>

<li>Information reasonably sufficient to permit Dolphin to contact you, such as your address, telephone number, and, e-mail address;</li>

<li>A statement that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or law; and</li>

<li>A statement, made under penalty of perjury, that the above information is accurate, and that you are the copyright owner or are authorized to act on behalf of the owner.</li>
</ol>

<p>
The above information must be submitted to the following DMCA Agent:
</p>
<blockquote>
Attn: DMCA Notice<br>
Email: <a class="underline" href="mailto:info@problemx.in">info@problemx.in</a>
</blockquote>

<p>
Under federal law, if you knowingly misrepresent that online material is infringing, you may be subject to criminal prosecution for perjury and civil penalties, including monetary damages, court costs, and attorneys' fees.
</p>

<p>
Please note that this procedure is exclusively for notifying Dolphin and its affiliates that your copyrighted material has been infringed. The preceding requirements are intended to comply with Dolphin's rights and obligations under the DMCA, including 17 U.S.C. §512(c), but do not constitute legal advice. It may be advisable to contact an attorney regarding your rights and obligations under the DMCA and other applicable laws.
</p>

<p>
In accordance with the DMCA and other applicable law, Dolphin has adopted a policy of terminating, in appropriate circumstances, Users who are deemed to be repeat infringers. Dolphin may also at its sole discretion limit access to the Service and/or terminate the User Accounts of any Users who infringe any intellectual property rights of others, whether or not there is any repeat infringement.
</p>


<h2>Third-Party Links and Information</h2>
<p>
The Service may contain links to third-party materials that are not owned or controlled by Dolphin. Dolphin does not endorse or assume any responsibility for any such third-party sites, information, materials, products, or services. If you access a third-party website or service from the Service or share your User Content on or through any third-party website or service, you do so at your own risk, and you understand that this Agreement and Dolphin's Privacy Policy do not apply to your use of such sites. You expressly relieve Dolphin from any and all liability arising from your use of any third-party website, service, or content, including without limitation User Content submitted by other Users. Additionally, your dealings with or participation in promotions of advertisers found on the Service, including payment and delivery of goods, and any other terms (such as warranties) are solely between you and such advertisers. You agree that Dolphin shall not be responsible for any loss or damage of any sort relating to your dealings with such advertisers.
</p>


<h2>Indemnity</h2>
<p>
You agree to defend, indemnify and hold harmless Dolphin and its subsidiaries, agents, licensors, managers, and other affiliated companies, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees) arising from: (i) your use of and access to the Service, including any data or content transmitted or received by you; (ii) your violation of any term of this Agreement, including without limitation your breach of any of the representations and warranties above; (iii) your violation of any third-party right, including without limitation any right of privacy or Intellectual Property Rights; (iv) your violation of any applicable law, rule or regulation; (v) User Content or any content that is submitted via your User Account including without limitation misleading, false, or inaccurate information; (vi) your willful misconduct; or (vii) any other party's access and use of the Service with your unique username, password or other appropriate security code.
</p>


<h2>No Warranty</h2>
<p>
The Service is provided on an "as is" and "as available" basis. Use of the Service is at your own risk. To the maximum extent permitted by applicable law, the Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, or non-infringement. No advice or information, whether oral or written, obtained by you from Dolphin or through the Service will create any warranty not expressly stated herein. Without limiting the foregoing, Dolphin, its subsidiaries, its affiliates, and its licensors do not warrant that the content is accurate, reliable or correct; that the Service will meet your requirements; that the Service will be available at any particular time or location, uninterrupted or secure; that any defects or errors will be corrected; or that the Service is free of viruses or other harmful components. Any content downloaded or otherwise obtained through the use of the Service is downloaded at your own risk and you will be solely responsible for any damage to your computer system or mobile device or loss of data that results from such download or your use of the Service.
</p>

<p>
Further, Dolphin does not warrant, endorse, guarantee, or assume responsibility for any product or service advertised or offered by a third party through the Service or any hyperlinked website or service, and Dolphin will not be a party to or in any way monitor any transaction between you and third-party providers of products or services.
</p>

<p>
Federal law, some states, provinces and other jurisdictions do not allow the exclusion and limitations of certain implied warranties, so the above exclusions may not apply to you. This Agreement gives you specific legal rights, and you may also have other rights which vary from state to state. The disclaimers and exclusions under this Agreement will not apply to the extent prohibited by applicable law.
</p>


<h2>Limitation of Liability</h2>
<p>
To the maximum extent permitted by applicable law, in no event shall Dolphin, its affiliates, agents, directors, employees, suppliers or licensors be liable for any indirect, punitive, incidental, special, consequential or exemplary damages, including without limitation damages for loss of profits, goodwill, use, data or other intangible losses, arising out of or relating to the use of, or inability to use, the Service. Under no circumstances will Dolphin be responsible for any damage, loss or injury resulting from hacking, tampering or other unauthorized access or use of the Service or your account or the information contained therein.
</p>

<p>
To the maximum extent permitted by applicable law, Dolphin assumes no liability or responsibility for any (i) errors, mistakes, or inaccuracies of content; (ii) personal injury or property damage, of any nature whatsoever, resulting from your access to or use of our service; (iii) any unauthorized access to or use of our secure servers and/or any and all personal information stored therein; (iv) any interruption or cessation of transmission to or from the Service; (v) any bugs, viruses, trojan horses, or the like that may be transmitted to or through our service by any third party; (vi) any errors or omissions in any content or for any loss or damage incurred as a result of the use of any content posted, emailed, transmitted, or otherwise made available through the Service; and/or (vii) User Content or the defamatory, offensive, or illegal conduct of any third party. In no event shall Dolphin, its affiliates, agents, directors, employees, suppliers, or licensors be liable to you for any claims, proceedings, liabilities, obligations, damages, losses or costs in an amount exceeding the amount you paid to Dolphin hereunder or $100.00, whichever is greater.
</p>

<p>
This limitation of liability section applies whether the alleged liability is based on contract, tort, negligence, strict liability, or any other basis, even if Dolphin has been advised of the possibility of such damage.
</p>

<p>
Some states do not allow the exclusion or limitation of incidental or consequential damages, so the above limitations or exclusions may not apply to you. This Agreement gives you specific legal rights, and you may also have other rights which vary from state to state. The disclaimers, exclusions, and limitations of liability under this Agreement will not apply to the extent prohibited by applicable law.
</p>


<h2>Governing Law, Arbitration, and Class Action/Jury Trial Waiver</h2>
<ol>
<li><b>Governing Law.</b>
You agree that: (i) the Service shall be deemed solely based in California; and (ii) the Service shall be deemed a passive one that does not give rise to personal jurisdiction over us, either specific or general, in jurisdictions other than California. This Agreement shall be governed by the internal substantive laws of the State of California, without respect to its conflict of laws principles. The parties acknowledge that this Agreement evidences a transaction involving interstate commerce. Notwithstanding the preceding sentences with respect to the substantive law, any arbitration conducted pursuant to the terms of this Agreement shall be governed by the Federal Arbitration Act (9 U.S.C. §§ 1-16). The application of the United Nations Convention on Contracts for the International Sale of Goods is expressly excluded. You agree to submit to the personal jurisdiction of the federal and state courts located in San Francisco County, California for any actions for which we retain the right to seek injunctive or other equitable relief in a court of competent jurisdiction to prevent the actual or threatened infringement, misappropriation or violation of a our copyrights, trademarks, trade secrets, patents, or other intellectual property or proprietary rights, as set forth in the Arbitration provision below, including any provisional relief required to prevent irreparable harm. You agree that San Francisco County, California is the proper forum for any appeals of an arbitration award or for trial court proceedings in the event that the arbitration provision below is found to be unenforceable.
</li>

<li><b>Arbitration.</b>
Read this section carefully because it requires the parties to arbitrate their disputes and limits the manner in which you can seek relief from Dolphin. For any dispute with Dolphin, you agree to first contact us at legal@Dolphin.com and attempt to resolve the dispute with us informally. In the unlikely event that Dolphin has not been able to resolve a dispute it has with you after sixty (60) days, we each agree to resolve any claim, dispute, or controversy (excluding any claims for injunctive or other equitable relief as provided below) arising out of or in connection with or relating to this Agreement, or the breach or alleged breach thereof (collectively, “Claims”), by binding arbitration by JAMS, under the Optional Expedited Arbitration Procedures then in effect for JAMS, except as provided herein. JAMS may be contacted at www.jamsadr.com. The arbitration will be conducted in San Francisco County, California, unless you and Dolphin agree otherwise. If you are using the Service for commercial purposes, each party will be responsible for paying any JAMS filing, administrative and arbitrator fees in accordance with JAMS rules, and the award Dolphined by the arbitrator shall include costs of arbitration, reasonable attorneys' fees and reasonable costs for expert and other witnesses. If you are an individual using the Service for non-commercial purposes: (i) JAMS may require you to pay a fee for the initiation of your case, unless you apply for and successfully obtain a fee waiver from JAMS; (ii) the award Dolphined by the arbitrator may include your costs of arbitration, your reasonable attorney's fees, and your reasonable costs for expert and other witnesses; and (iii) you may sue in a small claims court of competent jurisdiction without first engaging in arbitration, but this does not absolve you of your commitment to engage in the informal dispute resolution process. Any judgment on the award Dolphined by the arbitrator may be entered in any court of competent jurisdiction. Nothing in this Section shall be deemed as preventing Dolphin from seeking injunctive or other equitable relief from the courts as necessary to prevent the actual or threatened infringement, misappropriation, or violation of our data security, Intellectual Property Rights or other proprietary rights.
</li>

<li><b>Class Action/Jury Trial Waiver.</b>
With respect to all persons and entities, regardless of whether they have obtained or used the Service for personal, commercial or other purposes, all Claims must be brought in the parties' individual capacity, and not as a plaintiff or class member in any purported class action, collective action, private attorney general action or other representative proceeding. This waiver applies to class arbitration, and, unless we agree otherwise, the arbitrator may not consolidate more than one person's Claims. You agree that, by entering into this Agreement, you and Dolphin are each waiving the right to a trial by jury or to participate in a class action, collective action, private attorney general action, or other representative proceeding of any kind.
</li>
</ol>


<h2>General</h2>
<ol>
<li><b>Assignment.</b>
This Agreement, and any rights and licenses granted hereunder, may not be transferred or assigned by you, but may be assigned by Dolphin without restriction. Any attempted transfer or assignment in violation hereof shall be null and void.
</li>

<li><b>Notification Procedures and Changes to the Agreement.</b>
Dolphin may provide notifications, whether such notifications are required by law or are for marketing or other business related purposes, to you via email notice, written or hard copy notice, or through posting of such notice on our website, as determined by Dolphin in our sole discretion. Dolphin reserves the right to determine the form and means of providing notifications to our Users, provided that you may opt out of certain means of notification as described in this Agreement. Dolphin is not responsible for any automatic filtering you or your network provider may apply to email notifications we send to the email address you provide us. Dolphin may, in its sole discretion, modify or update this Agreement from time to time, and so you should review this page periodically. When we change the Agreement in a material manner, we will update the 'last modified' date at the top of this page and notify you that material changes have been made to the Agreement. Your continued use of the Service after any such change constitutes your acceptance of the new Terms of Service. If you do not agree to any of these terms or any future Terms of Service, do not use or access (or continue to access) the Service.
</li>

<li><b>Entire Agreement/Severability.</b>
This Agreement, together with any amendments and any additional agreements you may enter into with Dolphin in connection with the Service, shall constitute the entire agreement between you and Dolphin concerning the Service. If any provision of this Agreement is deemed invalid by a court of competent jurisdiction, the invalidity of such provision shall not affect the validity of the remaining provisions of this Agreement, which shall remain in full force and effect, except that in the event of unenforceability of the universal Class Action/Jury Trial Waiver, the entire arbitration agreement shall be unenforceable.
</li>


<li><b>No Waiver.</b>
No waiver of any term of this Agreement shall be deemed a further or continuing waiver of such term or any other term, and Dolphin's failure to assert any right or provision under this Agreement shall not constitute a waiver of such right or provision.
</li>


<li><b>Contact.</b>
Please contact us at info@problemx.in with any questions regarding this Agreement.
</li>
</ol>


<br><br>


`;
};
