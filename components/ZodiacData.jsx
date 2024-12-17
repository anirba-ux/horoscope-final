import React from 'react';
import { aris, taurus, gemini, cancer, leo, virgo, libra, scorpio, sagittarius, capricorn, aquarius, pisces } from '../assets';

const ZodiacData = [
  {
    name: "ARIES",
    img: aris,
    description: "Aries is the first sign of the zodiac, symbolized by the Ram. Known for their boldness, energy, and leadership qualities, Aries individuals are naturally driven to take initiative and embrace challenges. Ruled by Mars, the planet of action and aggression, they are action-oriented and love to lead, often charging forward with determination and confidence. As a fire sign, they radiate enthusiasm, passion, and a zest for life.\n\nAries is a cardinal sign, representing new beginnings, making them excellent at starting projects and spearheading change. They are known for their independent spirit and desire for freedom, preferring to take risks and blaze their own trail. However, their impulsive nature can sometimes lead to hasty decisions or a short temper.\n\nAries individuals thrive in environments that challenge them and often seek competitive or adventurous pursuits. While they are highly loyal and passionate in their relationships, they can sometimes be self-centered or impatient. Overall, Aries is a sign that embodies strength, optimism, and a relentless drive to succeed. They are natural-born leaders, eager to pave the way for others while living life with excitement and vigor."
  },
  {
    name: "TAURUS",
    img: taurus,
    description: "Taurus is the second sign of the zodiac, symbolized by the Bull. As an earth sign, Taurus is known for its practicality, stability, and strong sense of determination. Ruled by Venus, the planet of love and beauty, Taureans have a deep appreciation for the finer things in life, including comfort, luxury, and indulgence. \n\nPeople born under the Taurus sign are reliable, patient, and hardworking. They prefer a steady, predictable life and often work tirelessly to achieve their goals. Known for their loyalty and commitment, Taurus individuals value long-term relationships and seek stability in all aspects of their lives. While they may appear calm and reserved, they can also be fiercely protective and stubborn when it comes to matters that are important to them. \n\nTaurus is a fixed sign, meaning they are unwavering in their beliefs and routines, sometimes resisting change. Their grounded nature makes them excellent at managing finances and creating secure environments for themselves and others. However, they can be prone to materialism and possessiveness at times. \n\nOverall, Taurus is a sign that embodies strength, reliability, and a love for life's pleasures, always striving to create a comfortable and secure life for themselves and their loved ones."
  },
  
  {
    name: "GEMINI",
    img: gemini,
    description: "Gemini is the third sign of the zodiac, symbolized by the Twins, representing duality and versatility. As an air sign, Geminis are known for their intellectual curiosity, adaptability, and excellent communication skills. Ruled by Mercury, the planet of communication, they are quick-witted, social, and love to exchange ideas with others.\n\nPeople born under Gemini are often lively, energetic, and have a natural ability to connect with different kinds of people. They are inquisitive and constantly seeking new experiences, often excelling in environments that require multitasking or creativity. Their love for variety can make them easily bored with routine, and they thrive on change and novelty.\n\nGemini is a mutable sign, meaning they are flexible and adaptable to various situations, though sometimes they can be indecisive or inconsistent. Their tendency to see both sides of an issue can lead to a dual nature, where they may seem to have conflicting personalities. Despite this, Geminis are charming, friendly, and approachable.\n\nHowever, their ever-changing nature can sometimes make them appear unreliable or superficial. Overall, Gemini is a sign that embodies curiosity, adaptability, and communication, always looking to learn, grow, and experience the world in new ways."
  },
  
  {
    name: "CANCER",
    img: cancer,
    description: "Cancer is the fourth sign of the zodiac, represented by the crab. Ruled by the Moon, Cancerians are known for their deep emotional sensitivity, intuition, and nurturing nature. They are water signs, which makes them empathetic, compassionate, and highly attuned to the feelings of others. This sign is deeply connected to home and family, often valuing security and comfort above all else.\n\nPeople born under Cancer are known for their loyalty and protectiveness, especially towards loved ones. They tend to form strong bonds and are often seen as the 'caretakers' within their social circles. However, their sensitivity can also make them prone to mood swings, as they are greatly influenced by their emotions and environment.\n\nCancerians are highly imaginative, often displaying creative talents in art, writing, or music. Their cautious nature means they prefer to tread carefully in new situations. Despite their hard outer shell, like the crab, they possess a soft interior and can be easily hurt. To thrive, they need emotional reassurance and a stable, loving environment. Overall, Cancer embodies the qualities of warmth, dedication, and emotional depth."
    },
    
  {
    name: "LEO",
    img: leo, 
    description: "Leo is the fifth sign of the zodiac, symbolized by the lion. Ruled by the Sun, Leos are known for their confidence, charisma, and strong leadership qualities. As a fire sign, they are passionate, enthusiastic, and have a natural drive to shine in everything they do. Leos possess a warm and generous spirit, often bringing joy and positivity to those around them.\n\nPeople born under Leo are natural-born leaders who thrive on recognition and admiration. They are ambitious and determined, with a flair for the dramatic and a love of the spotlight. Their vibrant personality makes them magnetic and inspiring, but their desire for attention can sometimes come across as egotistical or domineering.\n\nLeos are fiercely loyal and protective of their loved ones. They value honesty, respect, and loyalty in their relationships. Beneath their confident exterior lies a big heart, and they are often generous and caring friends. They enjoy creativity and are drawn to activities like theater, music, and art.\n\nTo thrive, Leos need to feel appreciated and valued. Their boundless energy, courage, and optimism make them a force to be reckoned with, embodying the qualities of strength, warmth, and regal presence."
    },
    
    {
      name: "VIRGO",
      img: virgo,
      description: "Virgo is the sixth sign of the zodiac, symbolized by the maiden. Ruled by Mercury, Virgos are known for their analytical minds, attention to detail, and practical approach to life. As an earth sign, they are grounded, reliable, and value structure and order. Virgos are often perfectionists, striving for excellence in everything they do.\n\nPeople born under Virgo are highly organized, efficient, and methodical. They have a strong sense of duty and take their responsibilities seriously, making them dependable friends, coworkers, and partners. Their sharp intellect and observational skills enable them to solve problems with precision and care. However, their desire for perfection can sometimes lead to self-criticism and overthinking.\n\nVirgos are natural helpers, always willing to support others with practical advice or assistance. They are modest and prefer working behind the scenes rather than seeking the spotlight. Despite their reserved nature, they possess a deep well of kindness and compassion.\n\nVirgos enjoy activities that require skill and precision, such as writing, research, and crafts. To thrive, they need a sense of purpose and a structured environment. Overall, Virgo embodies qualities of intelligence, dedication, humility, and a desire to make the world a better place."

     },
    
  {
  name: "LIBRA",
  img: libra,
  description: "Libra  is the seventh sign of the zodiac, symbolized by the scales, representing balance, harmony, and justice. Ruled by Venus, Libras are known for their charm, diplomacy, and love for beauty and aesthetics. As an air sign, they are intellectual, social, and highly communicative, thriving on interactions with others.\n\nLibras seek fairness and equality in all aspects of life and have a natural talent for resolving conflicts. They are excellent mediators who value cooperation and strive to maintain peace in their relationships. Their desire for balance extends to their personal and professional lives, where they aim to create harmony and avoid confrontation.\n\nPeople born under Libra are often artistic and enjoy activities involving design, fashion, and the arts. They appreciate beauty in all forms and are drawn to environments that reflect elegance and refinement. However, their tendency to weigh all options can sometimes make them indecisive.\n\nLibras are warm, gracious, and sociable, making them popular among friends and colleagues. To thrive, they need harmony, companionship, and a sense of balance. Overall, Libra embodies the qualities of fairness, charm, creativity, and a strong sense of justice."
},

{
  name: "SCORPIO",
  img: scorpio,
  description: "Scorpio  is the eighth sign of the zodiac, symbolized by the scorpion. Ruled by Pluto and Mars, Scorpios are known for their intensity, passion, and determination. As a water sign, they are deeply emotional, intuitive, and perceptive, often sensing things others miss.\n\nScorpios are known for their magnetic presence and mysterious nature. They possess a powerful drive and a desire to uncover the truth, making them natural detectives and problem-solvers. Their determination and focus help them achieve their goals,  "
},
{
  name: "SAGITTARIUS",
  img: sagittarius,
  description: "Sagittarius  is the ninth sign of the zodiac, symbolized by the archer. Ruled by Jupiter, Sagittarians are known for their adventurous spirit, optimism, and love for freedom. As a fire sign, they are passionate, energetic, and enthusiastic, with an innate desire to explore and seek new experiences.\n\nSagittarians are independent and love the thrill of discovery, whether through travel, learning, or philosophical exploration. They have an open mind and are always eager to expand their knowledge and understanding of the world. Their adventurous nature makes them spontaneous and always in search of their next big adventure.\n\nPeople born under Sagittarius are known for their honesty and straightforwardness. They value freedom and often resist anything that feels restrictive. Though they can sometimes be blunt or tactless, their sincerity and optimism shine through.\n\nSagittarians enjoy physical activities, outdoor adventures, and intellectual pursuits. They are often drawn to sports, travel, and philosophy. To thrive, they need excitement, variety, and opportunities for growth. Overall, Sagittarius embodies the qualities of exploration, enthusiasm, honesty, and a deep desire to experience the world in all its diversity."
},

{
  name: "CAPRICORN",
  img: capricorn,
  description: "Capricorn (December 22 - January 19) is the tenth sign of the zodiac, symbolized by the goat. Ruled by Saturn, Capricorns are known for their ambition, discipline, and practicality. As an earth sign, they are grounded, reliable, and deeply focused on achieving their goals.\n\nCapricorns are hardworking and persistent, often striving for success in both their personal and professional lives. They value structure, responsibility, and stability, and are willing to put in the effort necessary to build a secure future. Their pragmatic nature makes them excellent planners and problem-solvers.\n\nPeople born under Capricorn are often seen as serious and reserved, but they also possess a dry sense of humor and a deep sense of loyalty. They are often drawn to leadership roles, where their determination and organizational skills can shine.\n\nCapricorns value tradition and are often very family-oriented. Though they can sometimes be perceived as rigid or overly cautious, they are incredibly dedicated and can adapt when necessary. They thrive in environments where they can take control and make tangible progress. Overall, Capricorn embodies the qualities of hard work, perseverance, ambittion and stabillity"
},
{
  name: "AQUARIUS",
  img: aquarius,
  description: "Aquarius (January 20 - February 18) is the eleventh sign of the zodiac, symbolized by the water-bearer. Ruled by Uranus, Aquarians are known for their originality, intellectualism, and humanitarian spirit. As an air sign, they are forward-thinking, independent, and often have a unique perspective on the world.\n\nAquarians are innovative and love to challenge the status quo. They are often ahead of their time, seeking new ideas, technologies, and ways to improve society. Their curiosity and open-mindedness make them lifelong learners, always exploring new concepts and ideals.\n\nPeople born under Aquarius are known for their strong sense of individuality and independence. They value freedom and often march to the beat of their own drum. While they can sometimes come across as aloof or detached, they care deeply about social causes and are often involved in efforts to make the world a better place."
},
{
  name: "PISCES",
  img: pisces,
  description: "Pisces (February 19 - March 20) is the twelfth sign of the zodiac, symbolized by two fish swimming in opposite directions. Ruled by Neptune, Pisces are known for their intuition, compassion, and creativity. As a water sign, they are deeply emotional, empathetic, and attuned to the feelings of others.\n\nPisces are often dreamers, with a strong imagination and a rich inner world. They are highly intuitive and can easily pick up on the energy and emotions around them. This makes them incredibly empathetic, often willing to help others and offer support when needed.\n\nPeople born under Pisces are sensitive and idealistic, often seeking harmony and peace in their relationships. They are often drawn to the arts, such as music, writing, or painting, where they can express their deep emotions and creative ideas. Despite their gentle nature, Pisces can sometimes struggle with boundaries and may retreat into their dreams when faced with harsh realities.\n\nPisces thrive in nurturing environments where they can express themselves freely. They need emotional connection and a sense of belonging. Overall, Pisces embodies the qualities of compassion, creativity, intuition, and a deep connection to the emotional and spiritual realms."
},

];

export default ZodiacData;
