import React, { FC } from 'react';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

interface Option {
    id: string;
    value: string;
    name: string;
}

interface Question {
    id: number;
    question: string;
    options: Option[];
}

interface IProps {
    questions: Question;
}

const Question: FC<IProps> = ({ questions }) => {
    console.log(questions.options[0].id);
    console.log(questions.options[1].id);
    console.log(questions.options[2].id);
    console.log(questions.options[3].id);

    return (
        <div className='mb-6 text-lg font-semibold'>
            <p className='mb-4 text-black'>{questions.question}</p>
            <RadioGroup defaultValue=''>
                {(questions.options ?? []).map((data) => (
                    <div key={data.id} className='flex items-center space-x-2'>
                        <RadioGroupItem
                            value={data.value}
                            id={`${data.id}`}
                        />
                        <Label
                            htmlFor={`${data.id}`}
                            className='text-black '
                        >
                            {data.value}
                        </Label>
                    </div>
                ))}
            </RadioGroup>
        </div>
    );
};

export default Question;
