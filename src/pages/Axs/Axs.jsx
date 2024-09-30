import * as Styled from './Axs.styled';
import { Link } from 'react-router-dom';
import { AxsData } from './Axs.data';
import { Button, Col, Image, Row, Typography } from 'antd';
import StakingDiagram from '../../assets/axs/staking-diagram.png';
import Allocation from '../../assets/axs/allocation.png';
import UnlockSchedule from '../../assets/axs/unlock-schedule.png';

const { Title, Text } = Typography;

const Axs = () => {
    return (
        <Styled.AxsWrapper>
            <Styled.HeaderWrapper>
                <h1>Axie Infinity Shards (AXS)</h1>
                <p>
                    Axie Infinity Shards are an ERC 20 governance token for the Axie universe.
                    Holders will shape the future of Axie Infinity by signaling their support for
                    upgrades to the ecosystem and directing usage of a Community Treasury.
                </p>
                <p>
                    <Link to='/' target='_blank'>AXS Vision Document</Link>
                    {` | `}
                    <Link to='/' target='_blank'>AXS Audit Report</Link>
                </p>
            </Styled.HeaderWrapper>

            <Styled.BodyWrapper>
                <Styled.PaperBorder />

                <Styled.PaperContainer>
                    <Styled.AxieIllustration />

                    <Styled.PaperContent>
                        <h1>What is AXS?</h1>

                        <p>
                            Axie Infinity Shards <strong>(AXS)</strong> are the glue that binds all Axie community members together.
                            <br /><br />
                            AXS holders will be able to claim rewards if they stake their tokens,
                            play the game, and participate in key governance votes.
                            Players will also be able to earn $AXS when they play various games
                            within the Axie Infinity Universe and through user generated content initiatives.
                        </p>

                        <Styled.IntroductionSection>
                            <Row justify={'space-between'}>
                                {AxsData.map((axs) => (
                                    <Col lg={7} key={axs.key}>
                                        <Image src={axs.icon} alt={axs.key} preview={false} />
                                        <Title level={2}>{axs.label}</Title>
                                        <Text>{axs.content}</Text>
                                    </Col>
                                ))}
                            </Row>
                        </Styled.IntroductionSection>

                        <Styled.StakingSection>
                            <Row justify='space-between'>
                                <Col lg={10}>
                                    <Title>Staking AXS</Title>
                                    <Text>
                                        AXS staking acts as an incentive for holding
                                        AXS and supporting the ecosystem. Stakers
                                        receive freshly issued AXS and will be able
                                        to signal their support for various proposals
                                        to improve Axie Infinity. AXS stakers will
                                        eventually direct usage of The Community Treasury.
                                    </Text>
                                    <Button>
                                        Stake AXS
                                    </Button>
                                </Col>

                                <Col lg={12}>
                                    <Image
                                        src={StakingDiagram}
                                        alt='staking'
                                        preview={false}
                                    />
                                </Col>
                            </Row>
                        </Styled.StakingSection>

                        <Styled.DiagramSection>
                            <Row justify='space-between'>
                                <Col lg={10}>
                                    <Title>Allocation</Title>
                                    <Image
                                        src={Allocation}
                                        alt='allocation'
                                        preview={false}
                                    />
                                </Col>

                                <Col lg={10}>
                                    <Title>Unlock Schedule</Title>
                                    <Image
                                        src={UnlockSchedule}
                                        alt='unlock-schedule'
                                        preview={false}
                                    />
                                </Col>
                            </Row>
                        </Styled.DiagramSection>
                    </Styled.PaperContent>
                </Styled.PaperContainer>

                <Styled.PaperBorder />
            </Styled.BodyWrapper>
        </Styled.AxsWrapper>
    )
}

export default Axs