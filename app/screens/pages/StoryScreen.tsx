import React from 'react';
import { Text, View, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

const storyContent = [
  `"And now you won't try to become my sinner..." he uttered those words to her which made Aahana finally trail her eyes to look at him.`,
  `His emerald eyes watched those tears shimmering in her brown hues. Tears of anger, tears of pain, tears of hatred...he could clearly read those emotions of hers which were concealed with her tears because his life had taught him enough to understand but at the same time, too complicated to get ignored so easily.`,
  `He watched her gazing at him with the expectation that she was definitely going to say something to him in return as he could clearly see it on her face that she wanted to leash at him but she proved him wrong by looking away from him in complete silence and then she tried to walk past him which made him clench his jaw.`,
  `Aahana attempted to walk past him but her feet paused as she saw him placing his hand on that wall beside her which guarded her path. She felt him coming closer to her but he didn't touch her in any way.`,
  `"Seems like you still haven't learnt your lesson about being obedient and respectful," he seethed out at her, glaring at her side profile. He didn't know why but her silence was getting on his last nerves. Firstly, he wanted to punish her for running her mouth so much against him but now he was blazing to ruin her existence for keeping her silence in front of him and he himself didn't even know why.`,
  `"That's why you still have this fucking audacity to ignore my words, Ms. Aahana Malhotra," he glowered at her which made Aahana finally look at him again. He caught her eyes and face reddening with the amount of tears she had shed and was still shedding.`,
  `"What do you want to hear that I am sorry for what I had said to you?" She finally opened her mouth. Her tone was tender and shivering but he knew it was hiding her rage and disdain for him.`,
  `"Then I am really very sorry for everything I had said and done to you," she apologised to him, gazing into his forest green eyes which filled with more rage at her words. He wanted her apology but now her apology was fucking with his head more terribly. What the fuck had gotten into him? Why did this fucking girl's mere words were affecting him so much?`,
  `He was baffled by the tumultuous feelings inside him. Her mere presence seemed to stir up emotions he thought he had long buried.`,
  `Aahana stood there, her breath heavy and uneven, trying to comprehend the storm of emotions she was facing.`,
  `"I don’t know what you want from me," she whispered, her voice breaking. "But I can't keep living in this fear and confusion."`,
  `He took a step back, his own heart racing. "Maybe I don't know what I want either. Maybe I just need to understand why you affect me this way."`,
  `Their eyes met again, and for a moment, it felt like time stood still. There was pain, anger, and something else—a glimmer of hope or understanding.`,
  `But just as quickly, the moment passed. She turned away, wiping her tears, and he let her go, knowing that neither of them had all the answers yet.`,
];


const comments = [
  { paragraphIndex: 0, count: 4 },
  { paragraphIndex: 2, count: 2 },
  { paragraphIndex: 5, count: 1 },
  { paragraphIndex: 7, count: 4 },
];

const StoryScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-black p-4">

      <View className="flex-row items-center justify-between pb-4">
        <Ionicons name="arrow-back" size={24} color="white" onPress={()=>router.back()}/>
        <Text className="text-white text-lg font-bold">HEART OF IRON</Text>
        <Ionicons name="menu" size={24} color="white" />
      </View>


      <Image
        source={require('../../../assets/banner.png')}
        className="w-full h-40 rounded-lg"
      />

    
      <Text className="text-white text-center text-2xl font-bold pb-4 mt-10 mb-2" >1. The Bond Of Hate</Text>

      <View className="flex-row justify-center pb-4 gap-x-5 mb-5">
        <View className="flex-row items-center">
          <Ionicons name="eye" size={20} color="gray" />
          <Text className="text-gray-400 pl-1">492</Text>
        </View> 
        <View className="flex-row items-center">
          <Ionicons name="heart" size={20} color="gray" />
          <Text className="text-gray-400 pl-1">156</Text>
        </View>
        <View className="flex-row items-center">
          <Ionicons name="chatbubble" size={20} color="gray" />
          <Text className="text-gray-400 pl-1">60</Text>
        </View>
      </View>

     
      <ScrollView>
        {storyContent.map((paragraph, index) => (
          <View key={index} className="flex-row items-start pb-2">
            <Text className="flex-1 text-gray-300 text-lg">{paragraph}</Text>
            {comments.find(comment => comment.paragraphIndex === index) && (
              <View className="pl-2">
                <Ionicons name="chatbubble" size={20} color="gray" />
                <Text className="text-gray-400 pl-1">{comments.find(comment => comment.paragraphIndex === index)?.count}</Text>
              </View>
            )}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default StoryScreen;
