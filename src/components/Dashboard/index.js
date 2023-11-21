import { observer } from 'mobx-react-lite';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import { Box, Grid, Paper, Typography } from '@mui/joy';

import useStore from '../../hooks/useStore';

function Dashboard() {
  const { boards } = useStore();

  function getListStyle() {}

  return (
    <Box p={2}>
      <DragDropContext onDragEnd={() => {}}>
        <Grid container>
          {boards.active?.sections((section) => {
            return (
              <Grid item key={section.id}>
                <Paper>
                  <Box p={1} display="flex" alignItems="center" justifyContent="center">
                    <Typography variant="h5">{section?.title}</Typography>
                  </Box>
                  <Droppable droppableId={section.id}>
                    {(provided, snapshot) => (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={getListStyle(snapshot.isDraggingOver)}>
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </DragDropContext>
    </Box>
  );
}

export default observer(Dashboard);
