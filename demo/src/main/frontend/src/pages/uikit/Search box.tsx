import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';

// 직원이름 검색창

const SearchContainer = styled.div`
  width: 400px;
  height: 45px;
  position: relative;
  border: 0;
  img {
    position: absolute;
    right: 10px;
    top: 10px;
  }
`;

const Search = styled.input`
  border: 0;
  padding-left: 10px;
  background-color: #eaeaea;
  width: 100%;
  height: 100%;
  outline: none;
`;


const AutoSearchContainer = styled.div`
  z-index: 3;
  height: 50vh;
  width: 400px;
  background-color: #fff;
  position: absolute;
  top: 45px;
  border: 2px solid;
  padding: 15px;
`;

const AutoSearchWrap = styled.ul`

`;

const AutoSearchData = styled.li<{ isFocus?: boolean }>`
  padding: 10px 8px;
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  z-index: 4;
  letter-spacing: 2px;
  &:hover {
    background-color: #edf5f5;
    cursor: pointer;
  }
  background-color: ${props => props.isFocus ? "#edf5f5" : "#fff"};
  position: relative;
  img {
    position: absolute;
    right: 5px;
    width: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;
interface autoDatas {
    city: string;
    growth_from_2000_to_2013: string;
    latitude: number;
    longitude: number;
    population: string;
    rank: string;
    state: string;
}
function Header() {
    const [keyword, setKeyword] = useState<string>("");
    const [index, setIndex] = useState<number>(-1);
    const [keyItems, setKeyItems] = useState<autoDatas[]>([]);
    const autoRef = useRef<HTMLUListElement>(null);
    const onChangeData = (e: React.FormEvent<HTMLInputElement>) => {
        setKeyword(e.currentTarget.value);
    };
    const ArrowDown = "ArrowDown";
    const ArrowUp = "ArrowUp";
    const Escape = "Escape";
    const handleKeyArrow = (e: React.KeyboardEvent) => {
        if (keyItems.length > 0) {
            switch (e.key) {
                case ArrowDown:
                    setIndex(index + 1);
                    if (autoRef.current?.childElementCount === index + 1) setIndex(0);
                    break;
                case ArrowUp:
                    setIndex(index - 1);
                    if (index <= 0) {
                        setKeyItems([]);
                        setIndex(-1);
                    }
                    break;
                case Escape:
                    setKeyItems([]);
                    setIndex(-1);
                    break;
            }
        }
    }
    const fetchData = () => {
        return fetch(
            // url 입력
            `https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json`
        )
            .then((res) => res.json())
            .then((data) => data.slice(0, 100))
    }
    interface ICity {
        includes(data: string): boolean;
        city?: any;
    }
    const updateData = async () => {
        const res = await fetchData();
        let b = res.filter((list: ICity) => list.city.includes(keyword) === true)
            .slice(0, 10);
        // console.log(b);
        setKeyItems(b);
    }
    useEffect(() => {
        updateData();
    }, [keyword])
    return (
        <SearchContainer style={{width:"200px"}}>
            <Search value={keyword} onChange={onChangeData} onKeyDown={handleKeyArrow} placeholder="이름을 입력해주세요" />
            <img src="https://img.icons8.com/ios-glyphs/30/-synthetidiamond-also-referred-to-as-laboratory-grown-diamond./search--v1.png" alt="searchIcon" />
            {keyItems.length > 0 && keyword && (
                <AutoSearchContainer>
                    <AutoSearchWrap ref={autoRef}>
                        {keyItems.map((search, idx) => (
                            <AutoSearchData
                                isFocus={index === idx ? true : false}
                                key={search.city}
                                onClick={() => {
                                    setKeyword(search.city);
                                }}
                            >
                                <a href="#">{search.city}</a>
                                <img src="https://img.icons8.com/ios-glyphs/30/000000/up-left-arrow.png" alt="minsearch" />
                            </AutoSearchData>
                        ))}
                    </AutoSearchWrap>
                </AutoSearchContainer>
            )}
        </SearchContainer>
    );
}
export default Header;