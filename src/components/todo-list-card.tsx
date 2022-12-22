import React from 'react';
import { TodoList } from '@/types/todo-list';
import {
  deleteTodoList,
  toggleTodoList,
} from '@/store/features/todo-list/slice';
import { useDispatch } from 'react-redux';
import { Button, SimpleGrid, Card, Text, createStyles } from '@mantine/core';

interface Props {
  data: TodoList[];
}

const useStyles = createStyles((theme) => ({
  card: {
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  cardTitle: {
    '&::after': {
      content: '""',
      display: 'block',
      backgroundColor: theme.fn.primaryColor(),
      width: 45,
      height: 2,
      marginTop: theme.spacing.sm,
    },
  },
}));

export const TodoListCard = ({ data }: Props) => {
  const dispatch = useDispatch();
  const classes: any = useStyles();

  const handleDelete = (data: TodoList) => dispatch(deleteTodoList(data));
  const handleComplete = (data: TodoList) => {
    dispatch(toggleTodoList(data.id));
  };
  return (
    <React.Fragment>
      <SimpleGrid
        cols={2}
        spacing="xl"
        mt={50}
        breakpoints={[{ maxWidth: 'md', cols: 1 }]}
      >
        {data.map((todo) => (
          <Card
            key={todo.id}
            shadow="md"
            radius="md"
            className={classes.card}
            p="xl"
          >
            <Text
              size="lg"
              weight={500}
              color={todo.isCompleted ? 'gray' : 'dark'}
              td={todo.isCompleted ? 'line-through' : ''}
              className={classes.cardTitle}
              mt="md"
            >
              {todo.title}
            </Text>
            <Text
              size="sm"
              color={todo.isCompleted ? 'gray' : 'dark'}
              td={todo.isCompleted ? 'line-through' : ''}
              mt="sm"
            >
              {todo.description}
            </Text>
            <Button
              mt={10}
              mx={2}
              color="red"
              size="xs"
              onClick={() => handleDelete(todo)}
            >
              Delete
            </Button>
            <Button
              mt={10}
              mx={2}
              color="blue"
              size="xs"
              onClick={() => handleComplete(todo)}
            >
              Complete
            </Button>
          </Card>
        ))}
      </SimpleGrid>
    </React.Fragment>
  );
};
