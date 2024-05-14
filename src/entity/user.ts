import {  Column, Entity, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate, CreateDateColumn, UpdateDateColumn } from "typeorm";
import bcrypt from "bcryptjs";

@Entity("user")
export class User  {

    @PrimaryGeneratedColumn()
    id!: number;

    // @Column()
    // firstName!: string;

    @Column()
    password!: string;
    
    @Column()
    userName!: string;

    @Column({ unique: true })
    email!: string;

    @Column({nullable:true})
    profileImage?: string;

    // @Column({ unique: true, length: 10 })
    // cardNumber!: string;

    // @Column({ type: 'numeric' })
    // balance!: number;

    // @Column({ type: Boolean, default: true })
    // isActive!: boolean;

    // @Column({
    //     type: "simple-json",
    //     nullable: true
    // })
    // additionalInfo!: {
    //     age: number;
    //     hairColor: string;
    // };

    // @Column({ type: "simple-array", default: [] })
    // familyMembers!: string[];

    // Hash password before inserting new user
    @BeforeInsert()
    async hashPasswordBeforeInsert() {
        if (this.password) {
            this.password = await bcrypt.hash(this.password, 10); // Hash password with a salt round of 10
        }
    }

    // Hash password before updating user
    @BeforeUpdate()
    async hashPasswordBeforeUpdate() {
        if (this.password) {
            this.password = await bcrypt.hash(this.password, 10); // Hash password with a salt round of 10
        }
    }

    // Method to compare passwords
    async comparePassword(candidatePassword: string): Promise<boolean> {
        return bcrypt.compare(candidatePassword, this.password);
    }

    @CreateDateColumn()
    createdAt!:Date;

    @UpdateDateColumn()
    updatedAt!:Date;
}
