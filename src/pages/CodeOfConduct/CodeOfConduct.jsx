import * as Styled from "./CodeOfConduct.styled";
import { useDocumentTitle } from "../../hooks";

const CodeOfConduct = () => {
  useDocumentTitle("Code of Conduct");

  return (
    <Styled.AxsWrapper>
      <Styled.HeaderWrapper>
        <h1>Code of Conduct</h1>
      </Styled.HeaderWrapper>
      <Styled.BodyWrapper>
        <Styled.PaperBorder />

        <Styled.PaperContainer>
          <Styled.AxieIllustration />

          <Styled.PaperContent>
            <p>
              We are Axie Infinity. Each of us brings our special talents and
              gifts to the community. Together, we are building the world’s
              largest equitable gaming ecosystem.
            </p>

            <p>
              We strive to create a happy, supportive, agile, productive
              community that embraces new ideas and perspectives, as we continue
              to create groundbreaking gaming innovations together. We realize
              that this is possible only when people with very different needs,
              interests and skills collaborate, respect, and encourage each
              other.
            </p>

            <p>
              Diverse perspectives are powerful, and we encourage participation
              from anyone who brings them to our community. This Code of Conduct
              exists to ensure that everyone's participation in our community
              results in mutual benefit and enjoyment. We will not accept any
              form of prejudice (religious, racial, class, national or
              gender-related) that could hinder the participation of individuals
              in the project. Respect for our community and for each other are
              foundational to our success, and are something we need to support
              every day.
            </p>

            <p>
              The Code of Conduct is one way we put Axie Infinity’s values into
              practice and{" "}
              <strong>
                we expect it to be honored by everyone who represents Axie
                officially or informally, claims affiliation with the project,
                or participates directly.
              </strong>
            </p>

            <p>
              If you have a question or ever think Axie Infinity is missing the
              mark of our commitment outlined below, please speak up. We want to
              hear from you.
            </p>
            <hr />
            <h1>We strive to:</h1>
            <h2>1. Be considerate</h2>
            <p>
              Our efforts affect other people, and we in turn will depend on the
              work of others. Any behavior or decision affects those around us,
              so we should consider others when deciding how we want to behave.
            </p>

            <h2>2. Be respectful</h2>
            <p>
              Disagreement is no excuse for poor manners. We work together to
              resolve conflict, assume good intentions and do our best to act in
              a caring way. We don’t allow frustration to turn into personal
              attacks. A community where people are uncomfortable or threatened
              is not a healthy one.
            </p>

            <h2>3. Take responsibility for our words and our actions</h2>
            <p>
              Everyone makes mistakes; when we do, we take responsibility for
              them. If someone has been harmed or offended, we listen carefully
              and respectfully, and work to right the wrong.
            </p>

            <h2>4. Ask for help when unsure</h2>
            <p>
              Axie prides itself on being a welcoming and helpful community.
              Nobody is expected to be perfect, and we want to help everyone be
              successful. Asking questions early avoids many problems later, so
              questions are encouraged, though you may be directed to the
              appropriate forum. Those who are approached with a question should
              be responsive and helpful.
            </p>

            <h2>5. Be collaborative</h2>
            <p>
              The products of our community are the complex results of many
              people’s ideas and dreams. We celebrate and champion collaboration
              within our community, knowing that it reduces redundancy and
              improves the quality of what we produce. Transparency is valued
              and prioritized as early and often as possible.
            </p>

            <h2>6. Value consensus</h2>
            <p>
              Disagreements both social and technical are normal, but we don’t
              allow them to linger. We expect participants in the project to
              resolve disagreements constructively. When they cannot, we
              escalate the matter to designated leaders to provide clarity and
              direction.
            </p>

            <h2>7. Maintain a healthy community space for all</h2>
            <p>
              Axie Infinity prides itself on being a friendly and collaborative
              community. This comes largely from our ability to hold ourselves,
              and each other accountable for our behavior. This includes
              escalating awareness of circumstances that make members of our
              community feel unfairly treated or threatened. In situations where
              you witness behaviors in the community that betray our Code of
              Conduct we encourage you to respectfully communicate your concerns
              directly with that individual or group.
            </p>

            <p>
              <em>
                The Axie Infinity Code of Conduct is based on the OpenMRS Code
                of Conduct licensed under the Creative Commons Attribution-Share
                Alike 3.0 license. Axie Infinity appreciates the OpenMRS
                community for sharing their work!
              </em>
            </p>
            <hr />
            <table>
              <thead>
                <th>Revision</th>
                <th>Date</th>
                <th>Author(s)</th>
                <th>Description of Change(s)</th>
              </thead>
              <tbody>
                <tr>
                  <td>1.0</td>
                  <td>23-Dec-2021</td>
                  <td>Syntax, SM Team</td>
                  <td>Final edits, begin localizations</td>
                </tr>
                <tr>
                  <td>0.6</td>
                  <td>03-Dec-2021</td>
                  <td>Syntax, Tgame</td>
                  <td>Wording revisions</td>
                </tr>
                <tr>
                  <td>0.5</td>
                  <td>15-Nov-2021</td>
                  <td>Axie Angel team</td>
                  <td>Group review and minor edits</td>
                </tr>
                <tr>
                  <td>0.2</td>
                  <td>15-Nov-2021</td>
                  <td>Odin, Syntax, Jihoz</td>
                  <td>Minor edits</td>
                </tr>
                <tr>
                  <td>0.1</td>
                  <td>15-Nov-2021</td>
                  <td>
                    SyntaxSyntax, Zyori, Jihoz, ProgrammaticallyPulled,
                    DeathRipsaw1990
                  </td>
                  <td>Wording revisions and edits</td>
                </tr>
                <tr>
                  <td>0.01</td>
                  <td>14-Nov-2021</td>
                  <td>Syntax</td>
                  <td>Initial draft created.</td>
                </tr>
              </tbody>
            </table>
          </Styled.PaperContent>
        </Styled.PaperContainer>

        <Styled.PaperBorder />
      </Styled.BodyWrapper>
    </Styled.AxsWrapper>
  );
};

export default CodeOfConduct;
