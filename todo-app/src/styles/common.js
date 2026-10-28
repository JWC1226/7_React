import styled from 'styled-components'

export const PageTitle = styled.h1`
  margin: 0 0 20px;
  font-size: 24px;
`
export const Card = styled.div`
  background: var(--surface);
  border-radius: 12px;
  padding: 20px;
  box-shadow: var(--card-shadow);
`
export const Button = styled.button`
  padding: 8px 14px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  color: #fff;
  background: ${({ $variant }) =>
    $variant === 'danger' ? 'var(--danger)' : $variant === 'ghost' ? 'var(--muted)' : 'var(--primary)'};
  &:hover {
    opacity: 0.9;
  }
`
export const Badge = styled.span`
  display: inline-block;
  padding: 2px 8px;
  border-radius: 999px;
  font-size: 12px;
  background: var(--primary-soft);
  color: var(--primary);
`
export const EmptyText = styled.p`
  color: var(--muted);
  text-align: center;
  padding: 24px 0;
`