import { useState } from "react"
import { useAppDispatch } from "../../app/hooks"
import { Monster } from "../../models/interfaces/monster.interface"
import { setComputerMonster, setSelectedMonster } from "../../reducers/monsters/monsters.actions"
import { Image, ListTitle, MonsterCard, MonsterName, MonstersSection } from "./MonstersList.styled"

type MonstersListProps = {
    monsters: Monster[]
}

const MonstersList: React.FC<MonstersListProps> = ({ monsters }) => {
    const dispatch = useAppDispatch();

    const [selectedMonsterId, setSelectedMonsterId] = useState<string | null>(null);

    const getRandomMonster = (monsterId: string, monstersList: Monster[]) => {
        let areEqual = true
        let randomMonster: Monster | null = null

        while (areEqual) {
            const randomIndex = Math.floor(Math.random() * monsters.length)
            randomMonster = monstersList[randomIndex]
            areEqual = monsterId === randomMonster.id
        }
        console.log(randomMonster)
        return randomMonster
    }

    const handleMonsterClick = (monster: Monster) => {
        const value = selectedMonsterId === monster.id ? null : monster.id
        setSelectedMonsterId(value)
        dispatch(setSelectedMonster(!value ? null : monster));
        if (value) {
            const computerMonster = getRandomMonster(value, monsters)
            dispatch(setComputerMonster(computerMonster));
        } else {
            dispatch(setComputerMonster(null));
        }
    }

    return (
        <div>
            <ListTitle>{monsters.length > 0 ? 'Select your monster' : 'No monsters available'}</ListTitle>

            <MonstersSection data-testid="monsters-list-section">
                {monsters.map(monster => (
                    <MonsterCard key={monster.id} onClick={() => handleMonsterClick(monster)} selected={monster.id === selectedMonsterId} data-testid={monster.id}>
                        <Image src={monster.imageUrl} />
                        <MonsterName>
                            {monster.name}
                        </MonsterName>
                    </MonsterCard>
                ))}
            </MonstersSection>
        </div>
    )
}

export { MonstersList }