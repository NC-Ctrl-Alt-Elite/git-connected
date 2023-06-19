import { collection, getDocs, query } from 'firebase/firestore';
import { View, Text, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import { db } from '../../firebase.config';
import ColabCard from './ColabCard';

const ProjectList = () => {
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const q = query(collection(db, 'repos', 'type', 'collaboration'));
      const projArray = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => projArray.push(doc.data()));
      setProjectList(projArray);
    };

    fetchProjects();
  }, []);

  const renderProjectItem = (item) => {
    return <ColabCard data={item} />;
  };

  return (
    <View>
      <FlatList data={projectList} renderItem={renderProjectItem} />
    </View>
  );
};

export default ProjectList;
