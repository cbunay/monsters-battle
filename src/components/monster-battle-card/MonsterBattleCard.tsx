import { Divider } from "@mui/material"
import { Monster } from "../../models/interfaces/monster.interface"
import { BattleMonsterAttribute, BattleMonsterCard, BattleMonsterName, BattleMonsterTitle, Image, ProgressBar } from "./MonsterBattleCard.styled"

type MonsterCardProps = {
    monster?: Monster | null
    title?: string
}

const MonsterBattleCard: React.FC<MonsterCardProps> = ({ title, monster }) => {

    if (!monster) {
        return (
            <BattleMonsterCard centralized>
                <BattleMonsterTitle>{title!}</BattleMonsterTitle>
            </BattleMonsterCard>
        )
    }

    return (
        <BattleMonsterCard>
            <Image src={monster.imageUrl} />
            <BattleMonsterName>{monster.name}</BattleMonsterName>
            <Divider />
            <BattleMonsterAttribute>HP</BattleMonsterAttribute>
            <ProgressBar variant="determinate" value={monster.hp} />
            <BattleMonsterAttribute>Attack</BattleMonsterAttribute>
            <ProgressBar variant="determinate" value={monster.attack} />
            <BattleMonsterAttribute>Defense</BattleMonsterAttribute>
            <ProgressBar variant="determinate" value={monster.defense} />
            <BattleMonsterAttribute>Speed</BattleMonsterAttribute>
            <ProgressBar variant="determinate" value={monster.speed} />
        </BattleMonsterCard>
    )
}

export { MonsterBattleCard }