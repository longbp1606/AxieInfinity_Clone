import * as Styled from "./PrivacyPolicy.styled";
import { Link } from "react-router-dom";
import { Button, Col, Image, Row, Typography } from "antd";
import StakingDiagram from "../../assets/axs/staking-diagram.png";
import Allocation from "../../assets/axs/allocation.png";
import UnlockSchedule from "../../assets/axs/unlock-schedule.png";
import { useDocumentTitle } from "../../hooks";
const { Title, Text } = Typography;

const PrivacyPolicy = () => {
  useDocumentTitle("Privacy Policy");

  return (
    <Styled.AxsWrapper>
      <Styled.HeaderWrapper>
        <h1>Privacy Policy</h1>
      </Styled.HeaderWrapper>
      <Styled.BodyWrapper>
        <Styled.PaperBorder />

        <Styled.PaperContainer>
          <Styled.AxieIllustration />

          <Styled.PaperContent>
            <p>Effective date: September 22nd, 2018</p>
            <p>Axie Infinity ("us", "we", or "our") operates the website.</p>
            <p>
              This page informs you of our policies regarding the collection,
              use, and disclosure of personal data when you use our Service and
              the choices you have associated with that data.
            </p>
            <p>
              We use your data to provide and improve the Service. By using the
              Service, you agree to the collection and use of information in
              accordance with this policy. Unless otherwise defined in this
              Privacy Policy, terms used in this Privacy Policy have the same
              meanings as in our Terms and Conditions.
            </p>
            <h2>I. INFORMATION COLLECTION AND USE</h2>
            <p>
              We collect several different types of information for various
              purposes to provide and improve our Service to you.
            </p>
            <p>
              If you do not use (log in to) the service for two years all your
              personal data will be deleted.
            </p>
            <p>Types of Data Collected:</p>
            <h3>1. Personal Data</h3>
            <p>
              While using our Service, we may ask you to provide us with certain
              personally identifiable information that can be used to contact or
              identify you ("Personal Data"). Personally identifiable
              information may include, but is not limited to:
            </p>
            <p>Email address Cookies and Usage Data</p>
            <h3>2. Usage Data</h3>
            <p>
              We may also collect information that your browser sends whenever
              you visit our Service or when you access the Service by or through
              a mobile device ("Usage Data").
            </p>

            <p>
              This Usage Data may include information such as your computer's
              Internet Protocol address (e.g. IP address), browser type, browser
              version, the pages of our Service that you visit, the time and
              date of your visit, the time spent on those pages, unique device
              identifiers and other diagnostic data.
            </p>

            <p>
              When you access the Service by or through a mobile device, this
              Usage Data may include information such as the type of mobile
              device you use, your mobile device unique ID, the IP address of
              your mobile device, your mobile operating system, the type of
              mobile Internet browser you use, unique device identifiers and
              other diagnostic data.
            </p>

            <h3>3. Tracking Cookies Data</h3>
            <p>
              We use cookies and similar tracking technologies to track the
              activity on our Service and hold certain information.
            </p>

            <p>
              Cookies are files with small amount of data which may include an
              anonymous unique identifier. Cookies are sent to your browser from
              a website and stored on your device. Tracking technologies also
              used are beacons, tags, and scripts to collect and track
              information and to improve and analyze our Service.
            </p>

            <p>
              You can instruct your browser to refuse all cookies or to indicate
              when a cookie is being sent. However, if you do not accept
              cookies, you may not be able to use some portions of our Service.
            </p>

            <p>Examples of Cookies we use:</p>

            <p>
              Session Cookies. We use Session Cookies to operate our Service.
              Preference Cookies. We use Preference Cookies to remember your
              preferences and various settings .Security Cookies. We use
              Security Cookies for security purposes.
            </p>

            <h2>II. USE OF DATA</h2>
            <p>Axie Infinity uses the collected data for various purposes:</p>

            <p>
              To provide and maintain the Service
              <br />
              To notify you about changes to our Service
              <br />
              To allow you to participate in interactive features of our Service
              when you choose to do so
              <br />
              To provide customer care and support
              <br />
              To provide analysis or valuable information so that we can improve
              the Service
              <br />
              To monitor the usage of the Service
              <br />
              To detect, prevent and address technical issues
            </p>

            <h2>III. TRANSFER OF DATA</h2>
            <p>
              Your information, including Personal Data, may be transferred to —
              and maintained on — computers located outside of your state,
              province, country or other governmental jurisdiction where the
              data protection laws may differ than those from your jurisdiction.
            </p>

            <p>
              If you are located outside United States and choose to provide
              information to us, please note that we transfer the data,
              including Personal Data, to United States and process it there.
            </p>

            <p>
              Your consent to this Privacy Policy followed by your submission of
              such information represents your agreement to that transfer.
            </p>

            <p>
              Axie Infinity will take all steps reasonably necessary to ensure
              that your data is treated securely and in accordance with this
              Privacy Policy and no transfer of your Personal Data will take
              place to an organization or a country unless there are adequate
              controls in place including the security of your data and other
              personal information.
            </p>

            <h2>IV. DISCLOSURE OF DATA</h2>
            <p>
              Legal Requirements Axie Infinity may disclose your Personal Data
              in the good faith belief that such action is necessary to:
            </p>

            <p>
              To comply with a legal obligation
              <br />
              To protect and defend the rights or property of Axie Infinity
              <br />
              To prevent or investigate possible wrongdoing in connection with
              the Service
              <br />
              To protect the personal safety of users of the Service or the
              public
              <br />
              To protect against legal liability
            </p>

            <h2>V. SECURITY OF DATA</h2>
            <p>
              The security of your data is important to us, but remember that no
              method of transmission over the Internet, or method of electronic
              storage is 100% secure. While we strive to use commercially
              acceptable means to protect your Personal Data, we cannot
              guarantee its absolute security.
            </p>

            <h2>VI. SERVICE PROVIDERS</h2>
            <p>
              We may employ third party companies and individuals to facilitate
              our Service ("Service Providers"), to provide the Service on our
              behalf, to perform Service-related services or to assist us in
              analyzing how our Service is used.
            </p>

            <p>
              These third parties have access to your Personal Data only to
              perform these tasks on our behalf and are obligated not to
              disclose or use it for any other purpose.
            </p>

            <p>
              Analytics We may use third-party Service Providers to monitor and
              analyze the use of our Service.
            </p>

            <h2>VII. LINKS TO OTHER SITES</h2>
            <p>
              Our Service may contain links to other sites that are not operated
              by us. If you click on a third party link, you will be directed to
              that third party's site. We strongly advise you to review the
              Privacy Policy of every site you visit.
            </p>

            <p>
              We have no control over and assume no responsibility for the
              content, privacy policies or practices of any third party sites or
              services.
            </p>

            <h2>VIII. CHILDREN'S PRIVACY</h2>
            <p>
              Our Service does not address anyone under the age of 18
              ("Children").
            </p>

            <p>
              We do not knowingly collect personally identifiable information
              from anyone under the age of 18. If you are a parent or guardian
              and you are aware that your Children has provided us with Personal
              Data, please contact us. If we become aware that we have collected
              Personal Data from children without verification of parental
              consent, we take steps to remove that information from our
              servers.
            </p>

            <h2>IX. CHANGES TO THIS PRIVACY POLICY</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page.
            </p>

            <p>
              We will let you know via email and/or a prominent notice on our
              Service, prior to the change becoming effective and update the
              "effective date" at the top of this Privacy Policy.
            </p>

            <p>
              You are advised to review this Privacy Policy periodically for any
              changes. Changes to this Privacy Policy are effective when they
              are posted on this page.
            </p>

            <h2>X. CONTACT US</h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us:
            </p>

            <p>
              Email:
              <a href="mailto:hello@axieinfinty.com"> hello@axieinfinity.com</a>
            </p>

            <p>
              If you would like to know what kind of information we are storing
              regarding your user, please email
              <a href="mailto:GDPR@axieinfinity.com?subject=SAR:User">
                {" "}
                GDPR@axieinfinity.com{" "}
              </a>
              and use the subject “SAR:User”
            </p>

            <p>
              If you would like your personal data deleted, please email
              <a href="mailto:GDPR@axieinfinity.com?subject=Delete:User">
                {" "}
                GDPR@axieinfinity.com{" "}
              </a>
              and use the subject: “Delete:User”
            </p>
          </Styled.PaperContent>
        </Styled.PaperContainer>

        <Styled.PaperBorder />
      </Styled.BodyWrapper>
    </Styled.AxsWrapper>
  );
};

export default PrivacyPolicy;
