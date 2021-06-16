import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { IoIosArrowDropup, IoIosArrowDropdown } from 'react-icons/io';

// Styles
const Th = styled.th`
  cursor: pointer;
  transition: all 0.2s;
  user-select: none;
  &:hover {
    background: ${oc.gray[5]};
  }
  &:active {
    color: ${oc.gray[1]};
  }
  svg {
    vertical-align: bottom;
  }
`;

interface Props {
  name: string;
  model: BaseModel;
  onToggle: () => void;
}

const TableHeader: React.FC<Props> = ({ name, model, onToggle }) => {
  return (
    <Th onClick={onToggle}>
      {name}{' '}
      {model.sort !== 'none' && (
        <>
          {model.sort === 'asc' ? <IoIosArrowDropup /> : <IoIosArrowDropdown />}
        </>
      )}
    </Th>
  );
};

export default TableHeader;